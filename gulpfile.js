const gulp = require('gulp');

// Move JSON data to the dist folder
gulp.task('moveJsonData', () => {
    return gulp.src('./src/data/**/**')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('moveFonts', () => {
    const fontList = [
        './src/components/layout/main/mandalor.ttf',
        './src/components/layout/main/mandalor.woff',
        './src/components/layout/main/mandalor.woff2'
    ];
    
    return gulp.src(fontList)
        .pipe(gulp.dest('dist/assets/style/fonts'));
});

gulp.task('default', gulp.series(['moveJsonData', 'moveFonts']));