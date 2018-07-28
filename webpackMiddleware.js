'use strict';

const { BUILD } = require('app/app-config');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const cnf = require(BUILD.CONFIG_INDEX);
const webpackCompiler = webpack(cnf);

module.exports = () => {
  return webpackMiddleware(webpackCompiler, cnf.devServer);
};