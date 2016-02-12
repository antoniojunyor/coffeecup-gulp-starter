var gulp = require('gulp');
    uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src('source/assets/javascripts/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('source/assets/javascripts/'));
});
