var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

init();

function init() {
  
  var bt = document.querySelectorAll('#lines')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  
  var turb2 = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm2 = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    var bounds = bt.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;
    TweenLite.set(turb, {
      attr: {
        x: isFF ? x : x + 10,
        y: isFF ? y : y + 10,
        width: 0,
        height: 0
      }
    });
    TweenLite.to(turb, 3, {
      attr: {
        x: '-=300',
        y: '-=300',
        width: 600,
        height: 600
      }
    });
    TweenLite.fromTo(dm, 3, {
      attr: {
        scale: 30
      }
    }, {
      attr: {
        scale: 0
      }
    });
  });
}