var gulp = require('gulp'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

gulp.task('concatjs', () => {
  return gulp.src([
    // List yours JS files here :)
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('source/assets/javascripts/'));
});
