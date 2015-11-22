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

//default
gulp.task('default', ['sass', 'watch', 'webserver'])


//webserver
gulp.task('webserver', function(){
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8031,
    }));
})

//watch
gulp.task('watch', function () {
  gulp.watch('sass/*.scss', ['default'])
})
