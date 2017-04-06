'use strict';

module.exports = function(options) {

  gulp.task('templates', function() {
    return gulp.src(path.src.pages)
                .pipe($.jade({
                  pretty: true
                }))
                .pipe(gulp.dest(path.build.html))
  });

}