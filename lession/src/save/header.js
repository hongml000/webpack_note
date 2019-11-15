// 原始写法
// var header = document.createElement('div')
// header.innerHTML = '<div>header<div>'
// root.append(header)


function Header() {
  var root = document.getElementById('root');
  var header = document.createElement('div');
  header.innerHTML = '<div>header<div>';
  root.append(header);
}
// es6
// export default Header;

// commonjs
module.exports = Header;