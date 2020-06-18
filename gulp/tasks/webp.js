const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const webpConverter = require('imagemin-webp')
const extReplace = require('gulp-ext-replace')

const onError = require('../libs/error')

const {
  images: {
    convert: { webp },
  },
} = require('../../config')

function webpTask() {
  return src(webp.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(imagemin([webpConverter(webp.options)]))
    .pipe(extReplace('.webp'))
    .pipe(dest(webp.dist))
}

webpTask.displayName = 'webp: convert and copy images'

module.exports = webpTask
