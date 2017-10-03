var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(sass({
            indentWidth: 1,
            indentType: 'tab',
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('jade', function () {
    return gulp.src('src/jade/demo.pug')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('run', ['sass', 'scripts', 'jade'], function () {
    return true;
});