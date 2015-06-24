'use strict';

var gulp 		= require('gulp');
var livereload 	= require('gulp-livereload');
var sass 		= require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles/css/'))
    .pipe(livereload());
});
 
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./styles/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);