'use strict';

module.exports = function(options) {

  return function() {
    return gulp.src(options.src)
              .pipe(gulp.dest(options.buildPath));
  }

}