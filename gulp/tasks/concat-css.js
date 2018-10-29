var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var config = require('../config/concat-css');
 
gulp.task('concatcss', function () {
  return gulp.src([config.srcDir + '/main.css'])
    .pipe(concatCss('main.bundle.css'))
    .pipe(gulp.dest(config.destDir));
});