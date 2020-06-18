const { series } = require('gulp')

exports.build = require('./gulp/tasks/build')

exports.svgSprite = series(require('./gulp/tasks/svgSprite'))

exports.default = require('./gulp/tasks/default')
