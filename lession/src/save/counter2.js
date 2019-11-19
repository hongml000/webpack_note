function counter2() {
  var div = document.createElement('div');
  div.setAttribute('id','counter2');
  div.innerHTML = 300;
  div.onclick = function() {
    div.innerHTML = parseInt(div.innerHTML) + 1
  }
  document.body.appendChild(div);
}
export default counter2;