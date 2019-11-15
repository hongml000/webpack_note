// 导入path包
const path = require('path')
const HttpWebpackPlugin = require('html-webpack-plugin')
// 新的写法必须写成对象形式
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',  //如果不写默认为production模式:一行压缩显示；development则不压缩
  devtool: 'source-map',
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  output: {
    // 在输出的文件名前，增加前缀
    // publicPath: 'http://www.cdn.com.cn',
    // 生成的文件名
    filename: '[name].js',
    /* 
    path必须写的绝对路径，如果想获取当前绝对路径目录，需要导入path包
    调用resolve方法，第一个参数__dirname代码当前配置文件（webpack.config.js）所在的目录
    */
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    // 说明打开的服务内容从哪来
    contentBase: path.join(__dirname, 'dist'),
    // 自动打开浏览器，默认是chrome打开
    open: true,
    // 设置代理，请求到/api/user的接口，会自动请求到http://localhost:3000/user
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [{
      // 匹配文件的正则
      test: /\.(png|jpg|gif|jpeg)$/i,
      use: [
        { 
          // 使用url-loader是兼容file-loader的写法
          // file-loader是直接将图片打包至目标目录下
          // url-loader则是在limit大小的限制下，小的可将图片编译成base64文件放在js文件输出，大的图片直接打包到目标目录下
          loader: 'url-loader',
          
          options: {
            // 输出的目标目录下，增加的子目录
            outputPath: './imgs/',
            // 小于6KB的使用base64编码写到js文件中，大于6KB则直接输出图片到目标目录下
            limit: 6000,
            // 使用占位符给图片命名：[name]和[ext]代表原来的图片名和后缀，注意必须加引号
            name: '[name]_[hash].[ext]'
          }
        }
      ]
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        // 如果需要配置详细的设置，就要写成对象格式
        {
          loader: 'css-loader',
          options: {
            // 开启模块化，即可以使用import xxx from 'xxx'方式导入样式文件，通过xxx.test获取样式
            modules: true,
            // 表示当在css文件中再嵌套导入其它css时，样式重新以最后两个loaders解析，即即便是嵌套的样式，也会从postcss-loader,sass-loader这样顺序来执行打包
            importLoaders: 2
          }
        } 
      ,
      'sass-loader', 
      'postcss-loader'] // 执行顺序是从右到左，从下到上
    },{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [ 'file-loader' ]
    }
  ]
  },
  plugins: [
    // 以./index.html作为模板，在bundle目录下自动生成一个index.html文件
    new HttpWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ]
}