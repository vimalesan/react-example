//$Id$//
var path = require('path');

module.exports = {
  entry: {"app":"./app/app.js"},

  output: {
    filename: '[name].main.js',
    path: path.join('client', 'js')
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony&insertPragma=React.DOM' },
    ]
  }
};

