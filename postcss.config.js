const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: 'default'
    })]
}
