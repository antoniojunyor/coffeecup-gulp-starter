var gulp = require('gulp'),
    watch = require('gulp-watch'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    livereload = require('gulp-livereload');

// Watch
gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('source/assets/stylesheets/**.sass', ['compass']);
  gulp.watch('source/assets/javascripts/coffee/*.coffee', ['coffee']);
  gulp.watch('source/assets/javascripts/*.js', ['concatjs']);
});
