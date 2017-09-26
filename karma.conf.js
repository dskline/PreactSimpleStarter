require('babel-register')
const webpack = require('./webpack.config.babel.js')
const path = require('path')

// Hack for commonsChunkPlugin
const commonsChunkPluginIndex = webpack.plugins.findIndex(plugin => plugin.chunkNames)
webpack.plugins.splice(commonsChunkPluginIndex, 1)

webpack.module.rules.push(
  {
    test: /src\/.*\.spec\.js$/,
    exclude: [
      path.resolve('node_modules/')
    ],
    loaders: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['env', 'stage-0'],
        plugins: ['transform-async-to-generator', 'transform-decorators-legacy']
      }
    }]
  },
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
