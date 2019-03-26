// Copyright (c) 2019 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const path = require('path');

module.exports = {
  entry: './src/markov.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'markov.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  }
};
