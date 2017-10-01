require('babel-register')
const webpack = require('./webpack.config.babel.js')

// Hack for commonsChunkPlugin
const commonsChunkPluginIndex = webpack.plugins.findIndex(plugin => plugin.chunkNames)
webpack.plugins.splice(commonsChunkPluginIndex, 1)

webpack.module.rules.push(
  {
    test: /\.js$|\.jsx$/,
    enforce: 'post',
    use: { loader: 'istanbul-instrumenter-loader', options: { esModules: true } },
    exclude: /node_modules|\.spec\.js$/
  }
)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'lcovonly',
          dir: 'coverage',
          subdir: '.'
        }
      ]
    },

    browsers: ['ChromeHeadless'],

    files: [
      'src/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.js': ['webpack'],
      '**/*.js': ['sourcemap']
    },

    webpack,
    webpackMiddleware: { noInfo: true }
  })
}
