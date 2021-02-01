
var $ = document.getElementById.bind(document),
    container = $('scrollbar-container'),
    content = $('content'),
    scroll = $('scrollbar');

content.addEventListener('scroll', function(e) {
  scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
  scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
});
var event = new Event('scroll');

//картинки с проектами
var wpCell = document.querySelectorAll('.wlp-cell-js'),
    wpImg = document.querySelectorAll('.wlp-img-js'),
    btnImg = document.querySelector('.more-btn--wlp');

var imgEndCount = 16,
    imgStartCount = 7;

for (let i = 8; i < wpImg.length; i++){
  wpImg[i].classList.add('wp-cell-js-hide');
  wpCell[i].classList.add('wp-cell-js-hide');
}

btnImg.onclick = function(){
  for (let i = imgStartCount; i < imgEndCount; i++){
    wpImg[i].classList.remove('wp-cell-js-hide');
    wpCell[i].classList.remove('wp-cell-js-hide');
  }
  imgEndCount = wpImg.length;
  imgStartCount = 16;
}
