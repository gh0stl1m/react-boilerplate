// External libraries
const merge = require('webpack-merge')

// Base
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000,
    disableHostCheck: true,
  },
  devtool: 'source-map',
});
