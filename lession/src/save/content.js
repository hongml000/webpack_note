// 原始写法
// var content = document.createElement('div')
// content.innerHTML = '<div>content<div>'
// root.append(content)


function Content() {
  var root = document.getElementById('root')
  var content = document.createElement('div')
  content.innerHTML = '<div>content<div>'
  root.append(content)
}
// es6
// export default Content;

// commonjs
module.exports = Content;