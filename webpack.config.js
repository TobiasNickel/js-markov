// Copyright (c) 2019 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const path = require('path');

const serverConfig = {
  entry: './src/markov.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'markov.node.js',
    library: 'markov',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
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

const browserConfig = {
  entry: './src/markov.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'markov.js',
    library: 'markov',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
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

module.exports = [
  serverConfig,
  browserConfig
];
