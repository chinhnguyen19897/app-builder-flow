const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')
const utils = require('./utils.js')

const getTsLoaderRule = (env) => {
  return [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true,
      },
    },
  ]
}

module.exports = async (options) => {
  const development = options.env === 'development'
  return merge({
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      modules: ['node_modules'],
      alias: utils.mapTypescriptAliasToWebpackAlias(),
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: getTsLoaderRule(options.env),
          include: [utils.root('./src')],
          exclude: [utils.root('node_modules')],
        },
      ],
    },
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'ts', 'jsx', 'tsx'],
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        chunksSortMode: 'auto',
        inject: 'body',
        base: '/',
      }),
    ],
  })
}
