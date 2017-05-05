'use strict';

module.exports = function(options) {
  
  return function() {
    return gulp.src(options.src)
                .pipe($.concat('app.js'))
                .pipe($.angularFilesort())
                .pipe(gulp.dest(options.buildPath))
  };
}