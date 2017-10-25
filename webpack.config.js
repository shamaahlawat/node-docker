const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app.js'
  ],

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader']
      }, {
        test: /\.html?$/,
        use: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|jpg|gif)($|\?)/,
        loader: 'url-loader?limit=65000'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
