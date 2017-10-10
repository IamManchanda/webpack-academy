const commonPaths = require('./common-paths.js');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin()
  ]
};

module.exports = config;
