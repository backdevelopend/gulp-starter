const { src, dest } = require('gulp')
const plumer = require('gulp-plumber')
const gulpIf = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const postCss = require('gulp-postcss')

const onError = require('../libs/error')

const { styles, isDevelopment } = require('../../config')

const postCssplugins = []
if (!isDevelopment) {
  postCssplugins.push(
    require('autoprefixer')(),
    require('cssnano')({ sort: true }),
    require('css-mqpacker')()
  )
}

function stylesTask() {
  return src(styles.src)
    .pipe(plumer({ errorHandler: onError }))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(!isDevelopment, postCss(postCssplugins)))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(dest(styles.dist))
}

stylesTask.displayName = 'styles: compile and copy css files'

module.exports = stylesTask
