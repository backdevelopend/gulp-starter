module.exports = {
  isDevelopment: process.env.NODE_ENV !== 'production',

  root: {
    src: 'src',
    dist: 'dist',
  },

  html: {
    src: 'src/*.html',
    dist: 'dist',
    watch: 'src/*.html',
  },

  styles: {
    src: 'src/sass/main.scss',
    dist: 'dist/css',
    watch: 'src/sass/**/*.scss',
  },

  images: {
    src: 'src/images/**/*.{webp,svg,jpg,jpeg,png,gif,ico}',
    dist: 'dist/images',
    watch: 'src/images/**/*.{webp,svg,jpg,jpeg,png,gif,ico}',

    optimizations: {
      svg: { plugins: [{ removeViewBox: true }] },
      jpg: { quality: 75 },
      png: { optimizationLevel: 5 },
      gif: { interlaced: true },
    },

    convert: {
      webp: {
        src: 'src/images/**/*.{svg,jpg,jpeg,png,gif}',
        dist: 'dist/images',
        options: {
          quality: 75,
        },
      },
    },
  },

  sprite: {
    svg: {
      src: 'src/sprites/svg/icons/*.svg',
      dist: 'src/sprites/svg',
      options: {
        mode: {
          symbol: {
            sprite: '../sprite.svg',
            render: {
              scss: {
                dest: '../../../sass/sprite.scss', //dist/images/symbols/
                // template: assetsDir + 'sass/templates/_sprite_template.scss',
              },
            },
            // example: true,
          },
        },
      },
    },
  },

  scripts: {
    src: 'src/js/**/*.js',
    dist: 'dist/js',
    watch: 'src/js/**/*.js',
  },

  fonts: {
    src: 'src/fonts/**/*.{woff2,woff,ttf,eot}',
    dist: 'dist/fonts',
    watch: 'src/fonts/**/*.{woff2,woff,ttf,eot}',
  },

  browserSync: {
    server: 'dist',
    proxy: null,
    files: [
      'dist/*.html',
      'dist/css/**/*.css',
      'dist/images/**/*.{webp,svg,jpg,jpeg,png,gif,ico}',
      'dist/fonts/**/*.{woff2,woff,ttf,eot}',
      'dist/js/**/*.js',
    ],
  },
}
