'use strict';

const { resolve, join } = require('path');
// Root
const BASEPATH = process.cwd();

// env variables
const { argv } = require('yargs')
  .option('buildmode', {
    default: false,
  })
  .help();

// Node Enviornment
const ENV = process.env.NODE_ENV || 'development';

const SERVER = {
  BUILD_MODE: argv.buildmode,
  HOST: 'localhost',
  PORT: 3000,
};

const PATHS = {
  // root path
  BASE_DIR: BASEPATH,
  ASSETS_DIR: resolve(BASEPATH, 'assets'),
  SOURCE_DIR: resolve(BASEPATH, 'src'),
  JS_DIR: resolve(BASEPATH, 'src/js'),
  VIEW_DIR: resolve(BASEPATH, 'src/templates'),
  CUSTOM_DIR: resolve(BASEPATH, 'src/templates', 'custom'),
  PARTIAL_DIR: resolve(BASEPATH, 'src/templates', 'partials'),
};

const BUILD = {
  // Webpack entry
  CONFIG_INDEX: resolve(BASEPATH, 'webpack.config'),
  // Output directory name
  BUILD_DIRNAME: 'dist',
  // Output path
  BUILD_PATH: join(BASEPATH, 'dist'),
  // Public path
  PUBLIC_PATH: '/dist/',
};

module.exports = {
  ENV, 
  PATHS,
  SERVER,
  BUILD,
};