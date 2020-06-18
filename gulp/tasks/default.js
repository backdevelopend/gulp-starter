const { series, parallel } = require('gulp')

const buildTask = require('./build')
const watchTask = require('./watch')
const browserSyncTask = require('./browserSync')

module.exports = series(buildTask, parallel(watchTask, browserSyncTask))
