
var $ = document.getElementById.bind(document),
    container = $('scrollbar-container'),
    content = $('content'),
    scroll = $('scrollbar');

content.addEventListener('scroll', function(e) {
  scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
  scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
});
var event = new Event('scroll');


