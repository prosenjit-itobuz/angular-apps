
var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

gulp.task('inject', function () {
	var target = gulp.src('./www/index.html');

	var scripts = gulp.src(['./www/**/*.js'])
			.pipe(angularFilesort());
  var styles = gulp.src(['./www/**/*.css'])

	return target
	.pipe(wiredep())
	.pipe(inject(scripts))
  .pipe(inject(styles))
	.pipe(gulp.dest('./build/'));
});

gulp.task('live', function() {
 
  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'
  }));

  gulp.watch('www/**/*.js', function(event) {
  	gulp.start('inject');    
  });

  gulp.watch('www/**/*.html', function(event) {
  	browserSync.reload(event.path);
  });

  gulp.watch(['www/*.html', 'bower.json'], ['inject']);
   
 
  browserSync.init({
    server: {
    baseDir: ['build'],
      routes: {
        '/public/components': 'public/components',
        '/www': 'www'
      }
    },
    startPath: '/build'
  });
});