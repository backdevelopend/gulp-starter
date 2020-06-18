const { watch } = require('gulp')

const { html, images, fonts, styles, scripts } = require('../../config')

const htmlTask = require('../tasks/html')
const imagesTask = require('../tasks/images')
const fontsTask = require('../tasks/fonts')
const stylesTask = require('../tasks/styles')
const scriptsTask = require('../tasks/scripts')

function watchTask() {
  watch(html.watch, htmlTask)
  watch(images.watch, imagesTask)
  watch(fonts.watch, fontsTask)
  watch(styles.watch, stylesTask)
  watch(scripts.watch, scriptsTask)
}

watchTask.displayName = 'watch: watch src files changes'

module.exports = watchTask
