const path = require('path')
const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const ENV = process.env.NODE_ENV // 使用set就可以获取到，使用cross-env获取不到
module.exports = (argv, env) => {
  let otherConfig;
  if (env.mode && env.mode === 'production') {
    otherConfig = require('./webpack.prod.config')
  } else {
    otherConfig = require('./webpack.dev.config')
  }
  return merge(base,otherConfig)
}
