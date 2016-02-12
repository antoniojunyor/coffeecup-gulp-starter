var gulp = require('gulp');
    concat = require('gulp-concat');

gulp.task('concatjs', function() {
  return gulp.src([
    'source/assets/javascripts/home.js',
    'source/assets/javascripts/contact.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('source/assets/javascripts/'));
});
