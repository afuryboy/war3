const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const util = require('./util')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          loaders: [
              {
                  loader: 'style-loader',
                  options: {
                      sourceMap: true,
                  },
              },
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true
                  },
              },
              {
                loader: 'resolve-url-loader'
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true,
                  },
              },
          ]
        },
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader?limit=1000000'
        }
      ]
    },
    resolve: {

    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.__VERSION__': `'${pkg.version}'`
      }),
      new VueLoaderPlugin()
    ]
}