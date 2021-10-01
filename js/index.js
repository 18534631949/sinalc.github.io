var ul = document.getElementById('ul')
var li = ul.getElementsByTagName('li')
var main = document.getElementsByClassName('main')
var arr = ['公司简介', '证书展示', '公司业绩']
var num =0
for(var i=0;i<li.length;i++){
  ;(function(i){
    li[i].onclick = function(){
      main[num].classList.remove('active')
      li[num].classList.remove('active')
      li[num].innerHTML = '<p>'+arr[num]+'</p>'
      li[i].innerHTML = '<p>'+arr[i]+'</p><img src="img/line.png">'
      
      main[i].classList.add('active')
      li[i].classList.add('active')
      num = i
    }
  })(i)
}