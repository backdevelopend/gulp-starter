const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const gulpIf = require('gulp-if')
const uglify = require('gulp-uglify')
const changed = require('gulp-changed')

const onError = require('../libs/error')

const { scripts, isDevelopment } = require('../../config')

function scriptsTask() {
  return src(scripts.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(scripts.dist))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(gulpIf(!isDevelopment, uglify()))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(dest(scripts.dist))
}

scriptsTask.displayName = 'scripts: compile and copy js files'

module.exports = scriptsTask
