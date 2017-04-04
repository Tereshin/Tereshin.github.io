'use strict';

const gulp = require('gulp'),
      jade = require('gulp-jade'),
      watch = require('gulp-watch'),
      scss = require('gulp-scss'),
      clean = require('gulp-clean'),
      concat = require('gulp-concat'),
      debug = require('gulp-debug'),
      gulpIf = require('gulp-if'),
      sourcemaps = require('gulp-sourcemaps'),
      del = require('del'),
      runSequence = require('run-sequence');

var isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


var path = {

  build: {
    html: 'build/views',
    css: 'build/css/',
    js: 'build/js/',
    images: 'build/images/',
    fonts: 'build/fonts/'
  },

  src: {
    js: 'src/js/**/*.js',
    jade: 'src/views/**/*.jade',
    styles: 'src/styles/styles.scss',
    images: 'src/images/**/**',
    fonts: 'src/fonts/**'
  },

  clean: 'build'

}

gulp.task('clean', function() {
  return del(path.clean);
});

gulp.task('templates', function() {
  return gulp.src(path.src.jade)
              .pipe(jade({
                pretty: true
              }))
              .pipe(gulp.dest(path.build.html))
});

gulp.task('styles', function() {
  return gulp.src(path.src.styles)
              .pipe(gulpIf(isDev, sourcemaps.init()))
              .pipe(scss())
              .pipe(gulpIf(isDev, sourcemaps.write()))
              .pipe(gulp.dest(path.build.css))
});

gulp.task('js', function() {
  return gulp.src(path.src.js)
              .pipe(gulp.dest(path.build.js))
});

gulp.task('images', function() {
  return gulp.src(path.src.images)
              .pipe(gulp.dest(path.build.images))
});

gulp.task('fonts', function() {
  return gulp.src(path.src.fonts)
              .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', function() {
  return runSequence('clean', ['styles', 'js', 'templates', 'fonts', 'images']);
});

