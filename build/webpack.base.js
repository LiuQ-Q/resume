const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, '../node_modules/@babel/polyfill/dist/polyfill.js'),
      path.join(__dirname, '../src/index.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'images/'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}