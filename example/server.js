var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var port = process.env.PORT || config.devPort;
var address = config.devAddress;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, address, function (error) {
  if (error) throw error;

  console.log('server running at http://%s:%d', address, port);
});
