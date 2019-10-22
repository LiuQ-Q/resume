const webpackBase = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBase, {
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.css', 'scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      minify:{
          removeComments: true, //移除注释
          // minifyJS: true, //压缩js
          // minifyCSS: true, //压缩css
          // collapseWhitespace: true, //去除空格
          // collapseWhitespace: true, //移除空白
          // removeAttributeQuotes: true //移除属性中的双引号
      }
    })
  ]
});