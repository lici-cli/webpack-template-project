const Webpack = require('webpack')
const path = require('path')



module.exports = {
  plugins: [
    
  ],
  devServer: {
    contentBase: 'dist',
    open: true,
    hot:true, // 模块热加载
    host: 'localhost',
    port: '8888',
    // inline:true, // 在打包的过程注入一个ws客户端
    compress: true,
    // proxy: {
      
    // },
    // before: app => {
      
    // }
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
}