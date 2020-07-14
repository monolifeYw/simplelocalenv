'use strict';

const { resolve } = require('path');
const { PATHS } = require('app/app-config');

module.exports = {
  'lazy-example': resolve(PATHS.BASE_DIR, 'src/js/es6Test/test.js'),
};
