var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../config/webpack.dev');
var browserSync = require('browser-sync');

gulp.task('webpack:dev', function(cb) {
    webpack(config, function() {
        cb();
    });
});

gulp.task('webpack:watch', function(cb){
    var built = false;
    webpack(config).watch(200, function() {
        browserSync.reload();
        
        if(!built) {
            built = true;
            cb();
        }
    })
});