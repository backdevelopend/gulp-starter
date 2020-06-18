const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')

const onError = require('../libs/error')

const { html } = require('../../config')

function htmlTask() {
  return src(html.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(html.dist))
    .pipe(dest(html.dist))
}

htmlTask.displayName = 'html: copy html files'

module.exports = htmlTask
