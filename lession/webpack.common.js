// 导入path包
const path = require('path')
const HttpWebpackPlugin = require('html-webpack-plugin')
// 新的写法必须写成对象形式
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
// let path = require('path')
// 使用全局变量的写法
// const merge = require('webpack-merge')
// const prodConfig = require('./webpack.prod.js')
// const devConfig = require('./webpack.dev.js')

commonConfig = {

  // entry: './src/index.js',
  entry: {
    // loadash_im: './src/loadash_im.js',
    main: './src/index.js'
  },
  output: {
    // 在输出的文件名前，增加前缀
    // publicPath: 'http://www.cdn.com.cn',
    // 生成的文件名
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[contenthash].js'
    /* 
    path必须写的绝对路径，如果想获取当前绝对路径目录，需要导入path包
    调用resolve方法，第一个参数__dirname代码当前配置文件（webpack.config.js）所在的目录
    */
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
      use: [
        // 如果是平常的css可以使用style-loader，但是如果是要做css代码分割，就要使用minicssextractplugin来替代
        // 'style-loader', 
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
      ]
    },{
      test: /\.scss$/,
      use: [
        // 如果是平常的css可以使用style-loader，但是如果是要做css代码分割，就要使用minicssextractplugin来替代
        // 'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
        },
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
    },
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      // 原来只使用babel-loader一个
      // loader: "babel-loader",
      // 要使用多个loader时，使用use数组
      use: [
        {
          loader: "babel-loader",
          options: {
            // 将es6语法翻译成es5语法
            // "presets": [
            //   [
            //     "@babel/preset-env",
            //     {
            //       // 不是把所有plyfill整个文件加载，而是按需加载，这样生成的文件就会小很多
            //       "useBuiltIns": 'usage',
            //       // 当使用useBuiltIns属性时，要写对应的corejs版本，否则会有警告
            //       "corejs":2,
            //       // 所使用的目标是chrome 58版本，ie 11版本
            //       "targets": {
            //         "chrome": "58",
            //         "ie": "11"
            //       } 
            //     }
            //   ]
            // ]
            "plugins": [
              [
                "@babel/plugin-transform-runtime",
                {
                  "absoluteRuntime": false,
                  "corejs": 2,
                  "helpers": true,
                  "regenerator": true, 
                  "useESModules": false
                }
              ],
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        },{
          loader: "imports-loader?this=>window"
        }
      ],
      
    }
  ]
  },
  plugins: [
    // 以./index.html作为模板，在bundle目录下自动生成一个index.html文件
    new HttpWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new webpack.ProvidePlugin({
      xx: 'lodash',
      $: 'jquery'
    })
  ],
  optimization:{
    // tree shaking开关
    usedExports: true,
    splitChunks: {
      chunks: 'async'
    },
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
}

module.exports = commonConfig;
// 全局变量设置
// module.exports = (env) => {
//   if(env && env.production) {
//     return merge(commonConfig, prodConfig)
//   }else {
//     return merge(commonConfig, devConfig)
//   }
// }