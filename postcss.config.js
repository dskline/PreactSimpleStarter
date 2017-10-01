const autoprefixer = require('autoprefixer')
const mediaQueryPacker = require('css-mqpacker')
const cssNano = require('cssnano')

module.exports = {
  plugins: [
    autoprefixer,
    mediaQueryPacker,
    cssNano({
      preset: 'default'
    })]
}
