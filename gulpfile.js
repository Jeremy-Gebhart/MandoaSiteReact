const gulp = require('gulp');

// Move JSON data to the dist folder
gulp.task('moveJsonData', () => {
    return gulp.src('./src/data/**/**')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('default', gulp.series(['moveJsonData']));