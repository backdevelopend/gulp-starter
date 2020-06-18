const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')

const onError = require('../libs/error')

const { fonts } = require('../../config')

function fontsTask() {
  return src(fonts.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(fonts.dist))
    .pipe(dest(fonts.dist))
}

fontsTask.displayName = 'fonts: copy font files'

module.exports = fontsTask
