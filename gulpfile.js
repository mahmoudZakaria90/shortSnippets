var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');

//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'expanded'})
   .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
   sass('./src/sass/en/shortSnippets.sass',{style:'expanded'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});


//watch 
gulp.task('watch',function(){
    gulp.watch('./src/sass/en/*.sass',['sass'])
    gulp.watch('./public/**/*.html',['html'])
    gulp.watch('./src/js/*.js',['compress'])
})


//html
gulp.task('html', function() {
    gulp.src('./public/**/*.html')
        .pipe(connect.reload());

})




//connect 
gulp.task('server',function(){
    connect.server({
        root: 'public',
        livereload: true
    })
})

//default
gulp.task('default',['watch','server'])