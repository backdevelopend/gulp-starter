const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const gulpIf = require('gulp-if')
const changed = require('gulp-changed')

const onError = require('../libs/error')

const { images, isDevelopment } = require('../../config')

function imagesTask() {
  return src(images.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(images.dist))
    .pipe(gulpIf(!isDevelopment, imagemin()))
    .pipe(dest(images.dist))
}

imagesTask.displayName = 'images: copy images'

module.exports = imagesTask
