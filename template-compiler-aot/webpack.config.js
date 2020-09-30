var path = require('path');

module.exports = {
  entry: './dist/aot/app/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: path.join(__dirname, 'dist'), loader: 'babel-loader' },
      { test: path.join(__dirname, 'dist'), loader: 'babel-loader' },
    ]
  }
};