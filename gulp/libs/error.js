const notify = require('gulp-notify')
const beep = require('beepbeep')

function onError(err) {
  beep()

  notify.onError({
    title: `Error in ${err.plugin}`,
    message: err.message,
  })(err)
}

module.exports = onError
