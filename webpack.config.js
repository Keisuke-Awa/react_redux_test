const path = require('path');

const publicDir = path.join(__dirname, '/public');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: publicDir,
  //   port: 8080,
  //   publicPath: '/js/'
  // },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};
