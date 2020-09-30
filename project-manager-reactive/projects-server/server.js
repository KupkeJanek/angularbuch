var jsonServer = require('json-server');
var bodyParser = require('body-parser');

var server = jsonServer.create();

server.use(jsonServer.defaults())
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

var db = 'db.json';

var router = jsonServer.router(db);

server.use('/api', router);

router.render = function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'Content-Type, Location,Content-Length');
  res.jsonp(res.locals.data);
};

server.listen(3000);

