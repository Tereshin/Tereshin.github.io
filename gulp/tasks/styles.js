'use strict';


module.exports = function(options) {
  
  return function() {
    return gulp.src(options.src)
                .pipe($.concat('styles.css'))
                .pipe($.bulkSass())
                .pipe($.sass())
                .pipe($.autoprefixer({
                  browsers: ['> 1%'],
                  cascade: false
                }))
                .pipe($.minifyCss())
                .pipe(gulp.dest(options.buildPath)); 
  }

}