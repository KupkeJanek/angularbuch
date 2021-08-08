const jsonServer = require('json-server');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const bodyParser = require('body-parser');


// Returns an Express server
const server = jsonServer.create();
server.set('superSecret', "mpwctmwprtwptwcwetr"); // secret variable

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

const http = require('http').Server(server);

let db = 'db.json';
let secured = false;

const args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  if (val) {
    const splitted = val.split("=");
    if (splitted.length == 2){
      const key = splitted[0];
      const value = splitted[1];
      if (key == 'db') {
        db = value;
      }
      if (key == 'secured') {
        secured = true;
      }
    }
  }
});

const router = jsonServer.router(db);

server.use('/api', router);

const io = require('socket.io')(3001);
const _socketMap = {};
io.on('connection', function (socket) {
  _socketMap[socket.id] = socket;
  socket.on('broadcast_task', function (data) {
    for (const socketKey in _socketMap) {
      const broadcastTo = _socketMap[socketKey];
      if (socket.id !== broadcastTo.id) {
        broadcastTo.emit('task_saved', data)
      }
    }
  });
});

router.render = function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'Content-Type, Location,Content-Length');
  res.jsonp(res.locals.data);
};

server.listen(3000);

if (secured) {

  server.post('/auth', function (req, res) {
    const password = req.body.password;
    const user = {
      name: req.body.name,
      passowrd: req.body.password
    };
    if (password === "s3cret") {
      const token = jwt.sign(user, server.get('superSecret'), {
        expiresInMinutes: 1440 // expires in 24 hours
      });

      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    } else {
      res.json({success: false, message: 'Authentication failed. User not found.'});
    }

  });

  router.render = function (req, res, next) {
    res.header('Access-Control-Expose-Headers', 'Content-Type, Location,Content-Length');

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, server.get('superSecret'), function (err, decoded) {
        if (err) {
          return res.json({success: false, message: 'Failed to authenticate token.'});
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          res.jsonp(res.locals.data)
        }
      });

    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  };

}
