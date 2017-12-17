'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
// const browserSync = require('browser-sync');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const notify = require('gulp-notify');
// const reload = browserSync.reload;

// 文件路径
const config = {
  static: {
    less: 'static/less/',
    js: 'static/js/',
    view: 'app/view/',
  },
  dist: {
    css: 'dist/css',
    js: 'dist/js/',
    revCss: 'dist/css/rev/',
    revJs: 'dist/js/rev/',
  },
};

gulp.task('less', function() {
  return gulp.src(config.static.less + '*.less')
    .pipe(less())
    .pipe(gulp.dest(config.dist.css))
    .pipe(notify('less 编译完毕!'));
});

gulp.task('rev-css', function() {
  return gulp.src(config.static.less + '*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rev())
    .pipe(gulp.dest(config.dist.revCss))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.dist.revCss))
    .pipe(notify('css 编译完毕!'));
});

gulp.task('rev-js', function() {
  return gulp.src(config.static.js + '*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(config.dist.revJs))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.dist.revJs))
    .pipe(notify('js 编译完毕!'));
});


gulp.task('run', [ 'rev-css', 'rev-js' ]);
