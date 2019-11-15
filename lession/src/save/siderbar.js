// 原始写法
// var siderbar = document.createElement('div')
// siderbar.innerHTML = '<div>siderbar<div>'
// root.append(siderbar)


function Siderbar() {
  var root = document.getElementById('root')
  var siderbar = document.createElement('div')
  siderbar.innerHTML = '<div>siderbar<div>'
  root.append(siderbar)
}
// es6
// export default Siderbar;

// commonjs
module.exports = Siderbar;