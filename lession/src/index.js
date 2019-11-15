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

import style from './index.scss'
import './iconfont.css'
var imgurl = require('./imgs/test.jpeg')

console.log(imgurl)
var root = document.getElementById('root')
var img = new Image()
img.src = imgurl
img.classList.add(style.test)
root.append(img)

var font = document.createElement('div')
font.className = 'iconfont icon-lock'
root.append(font)

console.log('我是错误的？？？？！！！')