const browserSync = require('browser-sync').create()

const options = require('../../config').browserSync

function browserSyncTask() {
  browserSync.init(options)
}

browserSyncTask.displayName = 'browserSync'

module.exports = browserSyncTask
