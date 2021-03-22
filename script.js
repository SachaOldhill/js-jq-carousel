function clickNext() {
  var active = $('.active');

  if (active.hasClass('last')) {
    var nextImg = $('img.first')
    active.removeClass('active')
    nextImg.addClass('active')

  } else {
    var nextImg = active.next('img');
    active.removeClass('active')
    nextImg.addClass('active')
  }
  console.log('clickNext');
}

function clickPrev() {
  var active = $('.active');

  if (active.hasClass('first')) {
   var prevImg = $('img.last');
   active.removeClass('active');
   prevImg.addClass('active');
 } else {
   var prevImg = active.prev('img');
   active.removeClass('active');
   prevImg.addClass('active');
 }
 console.log('clickPrev');
}

function init() {
 $('.next').click(clickNext);
 $('.prev').click(clickPrev);
}
$( document ).ready(init)
