$(function(){
  var left = $(document).outerWidth()-$(window).width();
  $('body, html').scrollLeft(left);
})

var root = document.documentElement;

document.addEventListener("mousemove", evt => {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;

  root.style.setProperty("--mouse-x", x);
  root.style.setProperty("--mouse-y", y);
})