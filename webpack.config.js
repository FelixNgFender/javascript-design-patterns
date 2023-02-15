const path = require('path');

module.exports = {
  entry: './restaurant/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'restaurant/dist'),
  },
};