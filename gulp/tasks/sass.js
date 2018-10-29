var gulp				= require('gulp');
var sass				= require('gulp-sass');
var sourcemaps	        = require('gulp-sourcemaps');
var config			    = require('../config/sass');
var autoprefixer        = require('gulp-autoprefixer');
var browserSync         = require('browser-sync');
var gulpSequence = require('gulp-sequence');

gulp.task('sass', function () {
    return gulp.src(config.src + '/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream());
});

gulp.task('sass:optimize', function () {
    return gulp.src(config.src + '/*.{scss,sass}')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch( config.src + config.pattern ).on('change', function(){
        gulpSequence('sass', 'concatcss', function() {
            browserSync.reload();
        })
    });
});
