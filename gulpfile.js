'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('serveprod', function() {
  connect.server({
    root: [your_project_path],
    port: process.env.PORT || 3000, // localhost:5000
    livereload: false
  });
});