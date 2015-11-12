var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'app.min.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //     semicolons: false,
    //   },
    // }),
  ],
}
