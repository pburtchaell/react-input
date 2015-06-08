var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './example/index',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/_gh_pages/'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
      hash: true,
      minify: true,
    }),
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src']
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
