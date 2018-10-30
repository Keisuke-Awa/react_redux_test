// const path = require('path');

// const publicDir = path.join(__dirname, '/public');

// module.exports = {
//   entry: {
//     app: './src/index.jsx',
//   },
//   output: {
//     path: publicDir,
//     publicPath: '/',
//     filename: 'bundle.js',
//   },
//   // devServer: {
//   //   contentBase: publicDir,
//   //   port: 8080,
//   //   publicPath: '/js/'
//   // },
//   devtool: 'eval-source-map',
//   mode: 'development',
//   module: {
//     rules: [{
//       test: /\.js$/,
//       enforce: 'pre',
//       exclude: /node_modules/,
//       loader: 'eslint-loader',
//     }, {
//       test: /\.css$/,
//       loader: ['style-loader', 'css-loader'],
//     }, {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//     }],
//   },
// };

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    mode: 'development',
    entry: [
      './src/index.jsx',
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              // プリセットを指定することで、ES2018 を ES5 に変換
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        }],
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
