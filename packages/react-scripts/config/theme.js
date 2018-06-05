'use strict';

const path = require('path');
const fs = require('fs');
const paths = require('./paths');

const theme = require(paths.appPackageJson).theme;

module.exports = function() {
  if (typeof theme === 'string') {
    return require(path.resolve(fs.realpathSync(process.cwd()), theme))();
  }
  return theme;
};
