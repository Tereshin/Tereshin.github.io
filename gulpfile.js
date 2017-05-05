'use strict';

const gulp = global.gulp = require('gulp'),
      $ = global.$ = require('gulp-load-plugins')({
        rename: {
          'gulp-sass-bulk-import': 'bulkSass'
        },
      });

const runSequence = require('run-sequence'),
      ensure = require('ensure.js');

var isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


var options = {

  build: {
    pages: 'build/views/',
    styles: 'build/styles/',
    scripts: 'build/',
    images: 'build/images/',
    fonts: 'build/fonts/',
    index: 'build/',
  },

  src: {
    js: 'src/scripts/**/*.js',
    jsComponents: 'src/pages/blocks/**/*.js',
    styles: 'src/styles/styles.scss',
    images: 'src/images/**/**',
    fonts: 'src/fonts/**',
    pagesAccount: 'src/pages/account/**.jade',
    pages: 'src/pages/*.jade'
  },

  clean: 'build',

  tasks: {
    path: './gulp/tasks/',
    list: [
      'clean',
      'scripts',
      'styles',
      'index',
      'pages',
      'images',
      'fonts'
    ],
    clean: 'build',
    styles: [
      'node_modules/jquery-fancybox/source/scss/jquery.fancybox.scss',
      'node_modules/flickity/dist/flickity.css',
      'src/styles/styles.scss',
    ],
    scripts: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jquery-fancybox/source/js/jquery.fancybox.pack.js',
      'node_modules/flickity/dist/flickity.pkgd.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'src/scripts/**/*.js',
      'src/pages/blocks/**/*.js'
    ],
    index: 'src/pages/index.jade',
    pages: 'src/pages/views/**.jade',
    images: 'src/images/**/**',
    fonts: 'src/fonts/**'
  },

}

function lazyRequireTasks(taskName, path, taskOptions) {
  taskOptions.taskName = taskName;
  if (taskName !== 'clean') {
    taskOptions.buildPath = options.build[taskName];
  }

  gulp.task(taskName, function(callback) {
    var task = require(path).call(this, taskOptions);

    return task(callback);
  });
}

options.tasks.list.forEach(function(task, i, list) {
  lazyRequireTasks(task, options.tasks.path + task, {
    src: options.tasks[task]
  });
});


gulp.task('build', function() {
  return runSequence('clean', ['styles', 'scripts', 'index', 'pages', 'fonts', 'images']);
});

