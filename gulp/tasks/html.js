var browserSync     = require('browser-sync');
var gulp			= require('gulp');
var config			= require('../config/html');
var gulpSequence    = require('gulp-sequence');
var configWebpackWatch = require('../config');

gulp.task('html', function() {
    browserSync.init({
        browser: config.browser,
        server: config.src,
        port: config.port,
        open: true
    });

    browserSync.reload();
});

gulp.task('html:watch', function() {
    browserSync.init({
        browser: config.browser,
        server: config.src,
        port: config.port
    });

    gulp.watch( config.watch ).on('change', function(){
        gulpSequence('templates', function() {
            browserSync.reload();
        })
    });
});