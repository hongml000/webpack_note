const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'lesson2.js',
    path: path.resolve(__dirname, 'dist'),
    // umd不适用于直接能用<script>标签方式引入包，所以在这里基础上增加此种,这种方法是生成一个全局变量 
    library: 'lesson2',
    // universal module definition，通用模块定义，适用于通过es、commonjs、amd方法引入
    libraryTarget: 'umd'
    // 如果不使用定义好的，可以自定义，指的是上面的全局变量挂载到的位置，即 this.lesson2
    // libraryTarget: 'this'
  }
}