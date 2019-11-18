const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',  //如果不写默认为production模式:一行压缩显示；development则不压缩
  devtool: 'cheap-module-source-map'
} 

module.exports = merge(commonConfig, prodConfig);