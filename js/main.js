var $female = $('.female');
var $male = $('.male');

$female.waypoint(function (direction) {
  if (direction == 'down') {
    $female.addClass('js-svg-animate');
  } else {
    $female.removeClass('js-svg-animate');
  }
}, {offset: '40%'});

$male.waypoint(function (direction) {
  if (direction == 'down') {
    $male.addClass('js-svg-animate');
  } else {
    $male.removeClass('js-svg-animate');
  }
}, {offset: '40%'});

$('.nav').localScroll();

$('#piggy').on('mouseover', function () {
  $('#check').addClass('checkanimate');
  $('#check1').addClass('checkanimate');
  $('#check2').addClass('checkanimate');
});

$('#cow').on('mouseover', function () {
  $('#check').addClass('checkanimate');
  $('#check1').addClass('checkanimate');
  $('#check2').addClass('checkanimate');
});

$('#chicken').on('mouseover', function () {
  $('#check').addClass('checkanimate');
  $('#check1').addClass('checkanimate');
  $('#check2').addClass('checkanimate');
});
