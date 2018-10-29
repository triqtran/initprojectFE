var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:production', function(cb){
    gulpSequence(
        'clean', 
        'copy', 
        'sass:optimize', 
        'concatcss', 
        'webpack:production', 
        'templates:production', 
        'html', 
        cb);
});
