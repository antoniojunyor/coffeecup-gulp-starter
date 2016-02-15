var gulp = require('gulp'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload');

gulp.task('compass', () => {
  gulp.src('source/assets/stylesheets/*.sass')
  .pipe(compass({
    config_file: 'config.rb',
    css: 'source/assets/stylesheets',
    sass: 'source/assets/stylesheets',
    image: 'source/assets/images'
  }))
  .pipe(livereload());
})
