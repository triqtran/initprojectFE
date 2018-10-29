var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb){
    gulpSequence(
        'clean', 
        'copy', 
        'sass', 
        'concatcss', 
        'webpack:dev', 
        'templates', 
        'html', 
        cb
    );
});