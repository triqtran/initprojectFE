const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const nunjucksConfig = require('../config/nunjucks');
 
gulp.task('templates', function() {
    gulp.src(nunjucksConfig.src + '*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest(nunjucksConfig.dest))
});

gulp.task('templates:production', function() {
    gulp.start('templates')
});