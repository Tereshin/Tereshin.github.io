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
    pages: 'build/views',
    styles: 'build/styles/',
    scripts: 'build/js/',
    images: 'build/images/',
    fonts: 'build/fonts/'
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
      'src/scripts/**/*.js',
      'src/pages/blocks/**/*.js'
    ],
    pages: [
      'src/pages/**.jade',
      'src/pages/account/**.jade'
    ],
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
  return runSequence('clean', ['styles', 'scripts', 'pages', 'fonts', 'images']);
});

