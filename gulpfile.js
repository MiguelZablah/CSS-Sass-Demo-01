// Requiered
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	stripCssComments = require('gulp-strip-css-comments');

// Route Variables
var sassSrc = 'sass/**/*.scss';
var sassDist = 'css/';

// Task Sass compiler
gulp.task('sass', function () {
	return gulp.src(sassSrc)
		.pipe(sass().on('error', sass.logError))
		.pipe(stripCssComments())
		// .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(sassDist));
});

// Task Sass wacher for changer
gulp.task('sass:watch', function () {
	gulp.watch(sassSrc, ['sass']);
});

gulp.task('default', ['sass']);