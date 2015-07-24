var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('stylus', function () {
    gulp.src('./app/client/style/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./app/client/build'));
});

gulp.task('watch', function () {
    watch('./app/client/style/*.styl', function () {
        gulp.start('stylus');
    });
});

gulp.task('default', ['stylus']);