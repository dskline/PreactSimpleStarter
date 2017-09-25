import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlCriticalWebpackPlugin from 'html-critical-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import OfflinePlugin from 'offline-plugin'
import Dashboard from 'webpack-dashboard/plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import NetlifyServerPushPlugin from './src/config/netlifyServerPushPlugin'

const ENV = process.env.NODE_ENV || 'development'

const extractSass = new ExtractTextPlugin({
  filename: '[name].[chunkhash:5].css',
  allChunks: true
})

module.exports = {
  entry: {
    app: ['whatwg-fetch', 'babel-polyfill', './src/index.js'],
    vendor: ['preact', 'preact-router']
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].[hash:8].chunk.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      src: path.resolve(__dirname, 'src/')
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /src|node_modules/,
        loader: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: /src/
      },
      {
        test: /\.js$/,
        loaders: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'stage-0'],
            plugins: ['transform-async-to-generator', 'transform-decorators-legacy']
          }
        }],
        include: [
          path.resolve('src'),
          path.resolve('node_modules/preact-compat/src')
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "config/main";',
              includePaths: [
                path.join(__dirname, 'src')
              ]
            }
          }]
        }),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.svg/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      'GC_AUTH_TOKEN': JSON.stringify(ENV === 'production'
        ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDI3MzIyMDMsImNsaWVudElkIjoiY2o2NTQzNnVxbW5majAxNjBubDUxMHh1aCIsInByb2plY3RJZCI6ImNqNjlmZGhtMTUxczkwMTA4Mm9pOHdlNWkiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqNmNmeWQ0ODFyeHIwMTAxOWNyNzUxNTIifQ.iYEh1sNJxoUV8k8mSBnoGPGbX4-30UWPiHPkw-Mkl70'
        : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDI3MTk2MzcsImNsaWVudElkIjoiY2o2NTQzNnVxbW5majAxNjBubDUxMHh1aCIsInByb2plY3RJZCI6ImNqNjU0MzZ1cW1uZmkwMTYwdHg3dHYzejkiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqNmM4aDB6MjFkMzEwMTIxd3g2dnhmcTEifQ.tIJ1LrgoJ0Fcnynz5PnzXTT5FSfl9AYzkuQpsM9tGUk')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Spencer Kline\'s Homepage',
      removeRedundantAttributes: true,
      inject: false,
      manifest: `${ENV === 'production' ? 'manifest.json' : '/assets/manifest.json'}`,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      themeColor: '#333'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ]
  // Only for development
    .concat(
      ENV === 'development'
        ? [new webpack.HotModuleReplacementPlugin(), new Dashboard()]
        : []
    )
  // Only for production
    .concat(
      ENV === 'production'
        ? [
          new webpack.NoEmitOnErrorsPlugin(),
          new CopyWebpackPlugin([
            { from: './src/assets/manifest.json', to: './' },
            { from: './src/assets/img', to: './img' }
          ]),
          new HtmlCriticalWebpackPlugin({
            base: path.join(path.resolve(__dirname), 'build/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            ignore: [/url\(http/],
            dimensions: [{
              // iPhone 6
              height: 736,
              width: 414
            }, {
              // iPad Pro
              height: 1366,
              width: 1024
            }],
            penthouse: {
              blockJSRequests: false,
              renderWaitTime: 4000
            }
          }),
          new webpack.optimize.UglifyJsPlugin({
            output: {
              comments: 0
            },
            compress: {
              unused: 1,
              warnings: 0
            }
          }),
          new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          }),
          new NetlifyServerPushPlugin({
            headersFile: '_headers'
          }),
          new OfflinePlugin({
            relativePaths: false,
            publicPath: '/',
            updateStrategy: 'all',
            safeToUseOptionalCaches: true,
            caches: 'all',
            ServiceWorker: {
              navigateFallbackURL: '/',
              events: true
            },
            AppCache: false,
            excludes: ['**/.*', '_headers']
          })
        ]
        : []
    ),

  stats: { colors: true },

  devtool: ENV !== 'production' && 'eval',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    compress: true,
    contentBase: './src',
    historyApiFallback: true
  }
}
