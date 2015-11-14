var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
}
