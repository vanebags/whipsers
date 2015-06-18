'use strict';

var gulp 		= require('gulp');
var livereload 	= require('gulp-livereload');
var sass 		= require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./public/styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/styles/css/'))
    .pipe(livereload());
});
 
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./public/styles/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);