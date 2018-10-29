var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:watch', function(cb){
    gulpSequence(
        'clean', 
        'sass', 
        'concatcss', 
        'sass:watch', 
        'webpack:watch', 
        'templates', 
        'copy', 
        'html:watch', 
        cb
    );
});