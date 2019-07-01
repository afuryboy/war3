const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const wp_common = require('./webpack.common.js')
const util = require('./util')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const net = require('net')
var port = 9001;

// function checkPort() {
//   var server = net.createServer().listen(port,'0.0.0.0')
//   server.on('listening', function(){
//     server.close();
//     console.log('The port【' + port + '】 is available.');
//   })
//   server.on('error', function(err){
//     if(err.code === 'EADDRINUSE') {
//       console.log('The port【' + port + '】 is occupied, please change other port.')
//       port++
//       checkPort()
//     }
//   })
// }
// checkPort()
module.exports = merge(wp_common, {
    devtool: 'eval-source-map',
    entry: {
      app: './examples/main.js'
    },
    output: {
      path: path.join(__dirname, '../examples'),
      publicPath: '',
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    devServer: {
      host: '0.0.0.0',
      port: port,
      publicPath: '/',
      noInfo: true
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
          war3: '../src/index',
          vue: 'vue/dist/vue.esm.js',
          '@': util.resolve('src'),
          // vue: 'vue/dist/vue.runtime.js'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
          inject: true,
          filename: './examples/index.html',
          template: './examples/index.html'
      }),
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`You application is running here http://localhost:${port}`],
          notes: ['代码永无bug']
        },
      })
    ],
    optimization: { // 替代CommonsChunkPlugin
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
})
