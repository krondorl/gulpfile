var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var inlineimage = require('gulp-inline-image');

var scssSrc = './scss/**/*.scss';
var jsSrc   = './js/**/*.js';
var distDir = './dist';

gulp.task('css', function () {
  var processors = [
    autoprefixer,
    cssnano
  ];
  return gulp.src(scssSrc)
    .pipe(inlineimage())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(distDir));
});

gulp.task('js', function () {
  return gulp.src(jsSrc)
    .pipe(babel())
    .pipe(gulp.dest(distDir));
});

gulp.task('default', function () {
  gulp.watch(scssSrc, ['css']);
  gulp.watch(jsSrc,   ['js']);
});