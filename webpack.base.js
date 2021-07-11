const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const Webpack = require('webpack')

const CSSREGEXP = /\.(css|less|scss|stylus)$/i
const JSREGEXP = /\.jsx?/i
const IMGREGEXP = /\.(git|png|jpe?g|svg|eot|ttf|woff|woff2)/i
const HTMLREGEXP = /\.html?/i
const NODE_ENV = process.env.NODE_ENV

// 是否为当入口
const ISSIGNENTRY = true
// 多入口
const ENTRY = ISSIGNENTRY ? './src/lazy.js':{
  pageA:'./src/pageA.js',
  pageB:'./src/pageB.js',
  pageC:'./src/pageC.js'
} 


module.exports = {
  entry: ENTRY,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: ISSIGNENTRY ? '[name].js' : '[name][chunkhash:8].js'
  },
  module: {
    // 被忽略掉的文件里不应该包含import，require，define等模块化语句
    // noParse: [/bootstrap\/dist\/css\/bootstrap\.css/],
    rules: [
      // 处理CSS
      {
        test: CSSREGEXP,
        use: [
          // 'style-loader',
          // 外链css
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          // 配置postcss-loader 添加浏览器列表导致热更新不行
          // {
          //   loader: 'postcss-loader', // 设置浏览器前缀
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //           {}
          //         ]
          //       ]
          //     }
          //   }
          // },
          'less-loader'
        ]
      },
      // 处理JS 加了这个loader之后，好像热更新也不行了
      {
        test: JSREGEXP,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                // "targets": "> 5%",
                'useBuiltIns': 'usage',
                'corejs': 3
              }
            ],
            // 处理react中的JSX语法
            '@babel/preset-react'
          ]
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // 处理图片图标资源
      {
        test: IMGREGEXP,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 32 * 1024,
            name: '[name][contenthash].[ext]',
            outputPath: 'assets/image',
            esModule: false // 针对require引入图片的处理
          }
        }]
      },
      // 针对html中的img路径
      {
        test: HTMLREGEXP,
        use: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    // 定义全局变量 可以在其他地方使用 __development__
    new Webpack.DefinePlugin({
      __development__: JSON.stringify(process.env.NODE_ENV)
    }),
    // clean
    new CleanWebpackPlugin(),
    // 自动产出HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      filename: 'index.html',
      // chunk:[] // 多入口可以使用
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/index.css'
    })
  ],
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  target: 'web',
  devtool: NODE_ENV === 'production' ? 'eval' : 'source-map',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
    // extensions: ['js', 'jsx', 'json', 'css'],
    // modules:['node_modules], //当你需要指定node_moduels之外的其他模块目录
    // mainFields: ['browser', 'module', 'main'],
  }

}
