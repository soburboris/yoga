'use strict';


let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/'

  },
  resolve: {
    alias: { // создание краткого пути до файлов
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@': path.resolve(__dirname, 'dust'),

    }
  },
  optimization: { // для создания вендора, который обслуживает  jquery!!!
    splitChunks: {
      chunks: 'all'
    }
  },


  // watch: true,

  // devtool: "source-map",

  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
    ],
  },
  plugins: [
    // new UglifyJsPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebPackPlugin([
      {
        from: path.resolve(__dirname, 'src/'),
        to: path.resolve(__dirname, 'dust')
      }
    ])
  ]
};