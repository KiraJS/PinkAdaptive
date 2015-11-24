var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');

//sass
gulp.task('sass', function (){
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(notify('Done!'));
})

//webserver
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 8032,
    }));
});

//watch
gulp.task('watch', function () {
  gulp.watch('sass/*.scss', ['sass'])
})


//default
gulp.task('default', ['sass', 'watch', 'webserver'])
