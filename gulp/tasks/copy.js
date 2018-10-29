var config      = require('../config/copy');
var gulp        = require('gulp');
var copy        = require('gulp-copy');

gulp.task('copy', function() {
    return gulp.src(config.src)
            .pipe(copy(config.dest, config.options));
});
