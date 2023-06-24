const webpack = require('webpack')
const webpackMerge = require('webpack-merge').merge
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const sass = require('sass')

const utils = require('./utils')
const commonConfig = require('./webpack.common.js')

const ENV = 'production'

module.exports = async () => {
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
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: { implementation: sass },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: false,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'content/[name].[contenthash].css',
        chunkFilename: 'content/[name].[chunkhash].css',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    ],
  })
}
