const gulp = require('gulp');
const sass = require('gulp-sass');

var paths = {
    styles: {
      src: "sass/**/*.scss",
      dest: "css"
    }
};


function style() {
    return (
        gulp
            .src(paths.styles.src)
 
            .pipe(sass())
            .on("error", sass.logError)
 
            .pipe(gulp.dest(paths.styles.dest))
    );
}
 
exports.style = style;

function watch(){
  gulp.watch(paths.styles.src, style)
}
    
// Don't forget to expose the task!
exports.watch = watch