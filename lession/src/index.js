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
import { add } from './math.js'
add(1,2);