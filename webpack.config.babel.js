import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlCriticalWebpackPlugin from 'html-critical-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OfflinePlugin from 'offline-plugin'
import BrotliPlugin from 'brotli-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: {
    app: ['./src/entry.js'],
    react: ['react', 'react-router', 'react-router-dom'],
    reactdom: ['react-dom'],
    apollo: ['apollo-client', 'apollo-cache-inmemory', 'apollo-link-http', 'apollo-cache', 'react-apollo', 'whatwg-fetch']
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
      'src': path.resolve(__dirname, 'src/')
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /src|node_modules/,
        use: ['source-map-loader', 'eslint-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "config/sass/imports";',
              includePaths: [
                path.join(__dirname, 'src')
              ]
            }
          }
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.svg/,
        use: 'raw-loader'
      },
      {
        test: /\.graphql/,
        loader: 'graphql-tag/loader'
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
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
      removeRedundantAttributes: true,
      inject: false,
      manifest: `${ENV === 'production' ? '/manifest.json' : '/assets/manifest.json'}`,
      iconDirectory: `${ENV === 'production' ? '/icons/' : '/assets/icons/'}`,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ]
  // Only for production
    .concat(
      ENV === 'production'
        ? [
          new webpack.NoEmitOnErrorsPlugin(),
          new CopyWebpackPlugin([
            { from: './src/assets' }
          ]),
          new HtmlCriticalWebpackPlugin({
            base: path.join(path.resolve(__dirname), 'build/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            ignore: [/(!#loading-screen)/],
            include: ['#loading-screen']
          }),
          new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html)$/,
            threshold: 10240,
            minRatio: 0.8
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
            AppCache: false
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../analytics/bundle-report.html',
            openAnalyzer: false
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
