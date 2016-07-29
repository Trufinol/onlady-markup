var gulp = require('gulp');
//var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var urlencode = require('gulp-css-urlencode-inline-svgs');

gulp.task('browser-sync', function() {
    browserSync({
      server: {
          baseDir: "./",
          index: "index.html"
      },
      port:3000,
      open: true,
      notify: false
    });
  });

  gulp.task('html', function(){
  gulp.src('./index.html')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', function () {

	return gulp.src('./scss/**/*.scss')
	.pipe(sass({expanded: true}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 10 versions'],
		cascade: false
	}))
  .pipe(urlencode())
	.pipe(concatCss("./styles.css", { rebaseUrls: false }))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['css'])
  gulp.watch('./index.html', ['html']);
});

gulp.task('default', ['browser-sync', 'css', 'watch']);
