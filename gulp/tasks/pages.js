'use strict';

module.exports = function(options) {

  var jadeOptions = {
    locals: require('../../locals_data/data.json'),
    pretty: true
  };

  return function() {

    return gulp.src(options.src)
                .pipe($.jade(jadeOptions))
                .pipe(gulp.dest(options.buildPath))
  }

}