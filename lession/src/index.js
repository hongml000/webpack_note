// 原始写法
// var root = document.getElementById('root')
// var header = document.createElement('div')
// header.innerHTML = '<div>header<div>'
// root.append(header)

// 使用es6语法
// import Header from './header.js'
// import Siderbar from './siderbar.js'
// import Content from './content.js'

// 使用commonJs语法
// var Header = require('./header.js')
// var Siderbar = require('./siderbar.js')
// var Content = require('./content.js')

// new Header()
// new Siderbar()
// new Content()



// // 引入图片
// import style from './index.scss'
// var imgurl = require('./imgs/test.jpeg')

// console.log(imgurl)
// var root = document.getElementById('root')
// var img = new Image()
// img.src = imgurl
// img.classList.add(style.test)
// root.append(img)

// // 引入图片文字
// import './iconfont.css'
// var font = document.createElement('div')
// font.className = 'iconfont icon-lock'
// root.append(font)

// console.log('我是错误的？？？？！！！')

// hot module replacement:css
// import './item.css'
// var btn = document.createElement('button');
// btn.innerText = "add"
// document.body.appendChild(btn)
// btn.onclick = function() {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   div.setAttribute('class','color');
//   document.body.appendChild(div);
// };

// hot module replacement:js
// import Counter from './counter'
// import Counter2 from './counter2' 

// Counter()
// Counter2()

// if(module.hot) {
//   module.hot.accept('./counter2', ()=>{
//     document.body.removeChild(document.getElementById('counter2'))
//     Counter2();
//   })
// }

// 使用babel处理es6
// 这是全局引入，可能在某些框架内会污染全局
// import "@babel/polyfill";
// new Promise(() => {});
// new Promise(() => {});

// arr.map(item => {
//   console.log(item);
// })

// 实现tree shaking
// import { add } from './math.js'
// add(1,2);

// 代码分割

// 未分割前
// import _ from 'lodash'

// // 分割后  
// // ... 此处省略n行业务代码 假设有1Mb
// console.log(_.join(['a','b','c'],' '))


// 按需加载
// function getComponent() {
//   // 动态加载包，原本是不支持的，需要安装一个包：npm install babel-plugin-dynamic-import-webpack
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then((module) => {
//     var ele = document.createElement('div');
//     console.log(module)
//     ele.innerHTML = module.join(['dell', 'lee'], '-');
//     return ele;
//   })
// }

// 使用async await简化promise
// async function getComponent() {
//   const module = await import(/* webpackChunkName:"lodash" */ 'lodash');
//   var ele = document.createElement('div');
//   console.log(module)
//   ele.innerHTML = module.join(['dell', 'lee'], '-');
//   return ele;
// }

// document.addEventListener('click', () => {
//   getComponent().then( ele => {
//     document.body.appendChild(ele);
//   })
// })


// 例子：提高网页利用率后
document.addEventListener('click', () => {
  // default: func 是将导出的默认default名给改了
  import(/* webpackPrefetch:true */ './prefetch_exp.js').then(( {default: func}) => {
    console.log(func)
    func(); 
  })
  
  // // 注意，如果直接导入的是整个模块，而不是一个方法
  // import('./prefetch_exp.js').then(module => {
  //   console.log(module)
  //   module.default(); 
  // })
})