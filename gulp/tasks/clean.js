const del = require('del')

const { root } = require('../../config')

function cleanTask() {
  return del(root.dist)
}

cleanTask.displayName = 'clean: remove dist directory'

module.exports = cleanTask
