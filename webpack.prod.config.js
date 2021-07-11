const Webpack = require('webpack')
const path = require('path')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  output: {
    publicPath:'/'
  },
  // DeprecationWarning: optimizeChunkAssets is deprecated 
  // (use Compilation.hooks.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_ * as stage option)
  // 优化
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new OptimizeCssAssetsWebpackPlugin(),
    //   new TerserWebpackPlugin()
    // ],
    // 提取公共代码 针对多入口文件
    // splitChunks: {
    //   // 缓存组
    //   cacheGroups: {
    //     // 不同页面的公共模块
    //     commons: {
    //       chunks:'initial',
    //       minChunks: 2, // 最少有两个复用
    //       minSize:0
          
    //     },
    //     // 第三方模块
    //     vendor: {
    //       chunks:'initial', // 最开始的模块
    //       test: /node_modules/,
    //       name:'vendor'
    //     }
    //   }
    // }
  },
  plugins: [
    // 拷贝静态文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'public'),
          to:path.join(__dirname,'dist','public')
        }
      ]
    }),
    // new Webpack.ProvidePlugin({
    //   // 全局上导出变量（也可以用expose-loader进行打出，但他不是全局。类似全局）
    //   '$':'jquery'
    // }),
    // 打包文件分析工具
    // new BundleAnalyzerPlugin(),

    // 使用动态链接库文件
    // new Webpack.DllReferencePlugin({
    //   manifest:require(path.join(__dirname,'dist','react.manifest.json'))
    // })
  ],
  // 优化
  externals: {
    // 以后再页面上import的jquery都是从cdn上获取，而且jquery这个包不会被打包进去。避免了重新打包
    // 要在cdn上引入jquery
    // 'jquery':'$'
  },
  // 监控源文件的变化 如果你使用webpack-dev-server 它自动就会调用watch:true
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   poll: 1000,
  //   aggregateTimeout:500
  // },
}