const webpack = require('webpack')
const svgToMiniDataURI = require('mini-svg-data-uri')
const webpackMerge = require('webpack-merge').merge
const sass = require('sass')
const utils = require('./utils.js')
const commonConfig = require('./webpack.common.js')

let ENV = 'development'

if (process.env.NODE_ENV === 'production') {
  ENV = 'production'
}

module.exports = async (options) =>
  webpackMerge(await commonConfig({ env: ENV }), {
    mode: ENV,
    entry: ['./src/index'],
    output: {
      path: utils.root('dist'),
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
    },

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss?$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      static: './dist',
      port: 9060,
      historyApiFallback: true,
    },
  })
