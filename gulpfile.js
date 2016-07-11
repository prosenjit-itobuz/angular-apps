var wiredep = require('wiredep').stream;
var gulp = require('gulp');

gulp.task('bower', function () {
  gulp.src('./www/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./www/'));
});