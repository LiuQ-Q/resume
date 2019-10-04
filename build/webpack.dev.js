const webpackBase = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBase, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: 'build.js'
  },
  devServer: {
    port: 3000,
    proxy: {

    },
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html')
    })
  ]
})