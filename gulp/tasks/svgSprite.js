const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const svgSprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const onError = require('../libs/error')

const svg = require('../../config').sprite.svg

function svgSpriteTask() {
  return src(svg.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(svgmin({ js2svg: { pretty: true } }))
    .pipe(
      cheerio({
        // run: function ($) {
        //   $('[fill]').removeAttr('fill')
        //   $('[stroke]').removeAttr('stroke')
        //   $('[style]').removeAttr('style')
        // },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(svg.options))
    .pipe(dest(svg.dist))
}

svgSpriteTask.displayName = 'svgSprite: create svg sprite'

module.exports = svgSpriteTask
