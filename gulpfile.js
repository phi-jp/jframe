/*
 * gulpfile.js
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = [
  "/* ",
  " * <%= pkg.name %> <%= pkg.version %>",
  " * <%= pkg.description %>",
  " * MIT Licensed",
  " * ",
  " * Copyright (C) 2016 phi, http://phiary.me",
  " */",
  "",
  "",
  "'use strict';",
  "",
  "",
].join('\n');


var target = ['src/jframe.js'];
var output = './';

gulp.task('build', function() {
  return gulp
    .src(target)
    .pipe(header(banner, {
      pkg: pkg,
    }))
    .pipe(gulp.dest(output))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(output))
    ;
});

gulp.task('watch', function(){
  gulp.watch(target, ['build']);
});

gulp.task('default', ['build']);
