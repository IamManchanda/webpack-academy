const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: extractTextWebpackPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new extractTextWebpackPlugin('style.css'),
    new uglifyJSWebpackPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;