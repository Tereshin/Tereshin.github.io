"use strict";

var pkg     = require('../../package.json'),
    bundler = require('./helpers/bundler');


/* Paths */

var _src    = './src/',
    _dist   = './dist/',
    _public = './public/';

var _js     = 'js/',
    _css    = 'css/',
    _img    = 'img/',
    _html   = 'html/';


/* Bundles */

var bundles = [
  {
    name        : 'app',
    global      : 'app',
    compress    : true,
    saveToDist  : true
  }
];


/* Tasks params */

module.exports = {

  scripts: {

  },

  css: {
    
  },

  images: {
    
  },

  sprite: {
    
  },

  html: {
    
  },

  copy: {
    
  },

  clean: {
    _public: _public,
    _dist: _dist
  }

};