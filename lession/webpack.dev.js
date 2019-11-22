const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')
const devConfig = {
  mode: 'development',  //如果不写默认为production模式:一行压缩显示；development则不压缩
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // 说明打开的服务内容从哪来
    contentBase: path.join(__dirname, 'dist'),
    // 自动打开浏览器，默认是chrome打开
    open: true,
    // 开启hot module replacement开关
    hot: true,
    port: 8080
    // // 即使HMR不成功，也不刷新页面
    // hotOnly: true 
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
  }
} 

module.exports = merge(devConfig, commonConfig)
// module.exports = devConfig;