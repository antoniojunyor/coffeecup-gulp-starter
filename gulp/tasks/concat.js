var gulp = require('gulp'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

gulp.task('concatjs', () => {
  return gulp.src([
    'source/assets/javascripts/_home.js',
    'source/assets/javascripts/_contact.js',
    'source/assets/javascripts/_link.js',
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('source/assets/javascripts/'));
});
