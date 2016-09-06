const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  devtool: 'cheap-inline-module-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: { presets: ['es2015'] }
    }],
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: path.resolve(__dirname, '/src/js')
    }]
  },

  eslint: {
    configFile: '/.eslintrc'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
