var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  cache: true,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './index')
    ],
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    alias: {
      'react-input': path.join(__dirname, '..', 'src', 'form')
    }
  }
};
