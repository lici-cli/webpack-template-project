// 动态链接库

const path = require('path');
const Webpack = require('webpack')
module.exports = {
  entry:{
    react:['react','react-dom'] //react模块打包到-个动态连接库
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].dll.js',     //输出动态连接库的文件名称
    library:'_dll_[name]'  //全局变量名称
  },
  // mainfest 表示一个描述文件
  plugins:[
    new Webpack.DllPlugin({
      name:'_dll_[name]', // 和output.library中一致，值就是输出的manifest. json中的name的属性值
      path:path.join(__dirname,'dist','[name].manifest.json')
    })
  ]
}