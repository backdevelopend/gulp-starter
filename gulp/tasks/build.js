const { series, parallel } = require('gulp')

const { isDevelopment } = require('../../config')

const cleanTask = require('../tasks/clean')
const htmlTask = require('../tasks/html')

const imagesTask = isDevelopment
  ? require('../tasks/images')
  : series(require('../tasks/images'), require('../tasks/webp'))

const fontsTask = require('../tasks/fonts')
const stylesTask = require('../tasks/styles')
const scriptsTask = require('../tasks/scripts')

module.exports = series(
  cleanTask,
  parallel(htmlTask, imagesTask, fontsTask, stylesTask, scriptsTask)
)
