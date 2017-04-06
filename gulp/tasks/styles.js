'use strict';


module.exports = function(options) {
  
  return function() {
    return gulp.src(options.src)
                .pipe($.concat('styles.css'))
                .pipe($.bulkSass())
                .pipe($.sass())
                .pipe(gulp.dest(options.buildPath)); 
  }

}