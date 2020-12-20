'use strict';

const less = require('gulp-less');
const {task , src, watch, series, dest} = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

exports.less = function () {
    return src(['less/main.less','less/adaptive.less'])
        .pipe(less())
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.lessWatch = function () {
    watch('./less/*.less', series('less'));
};