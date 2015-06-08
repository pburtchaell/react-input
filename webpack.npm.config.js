var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    input: './src/index',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?stage=0'],
      }
    ]
  }
};
