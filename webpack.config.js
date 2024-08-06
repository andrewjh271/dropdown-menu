const path = require('path');

module.exports = {
  entry: './src/menu.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  mode: 'development',
  devtool: 'source-map'
};