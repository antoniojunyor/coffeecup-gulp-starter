var gulp = require('gulp'),
    coffee = require('gulp-coffee');
    sourcemaps = require('gulp-sourcemaps'),

gulp.task('coffee', function() {
  gulp.src('source/assets/javascripts/coffee/*.coffee')
  .pipe(sourcemaps.init())
  .pipe(coffee())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('source/assets/javascripts/'));
});
