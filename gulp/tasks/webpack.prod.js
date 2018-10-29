var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../config/webpack.prod');
var browserSync = require('browser-sync');

gulp.task('webpack:production', function(cb) {
    webpack(config, function(err, stats) {
        cb();
    });
});