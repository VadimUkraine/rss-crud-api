const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [
        '/node_modules/',
        '/public/',
        ],
      },
    ],
  },
  target: 'node',
  mode: 'production',
};

module.exports = () => webpackConfig;
