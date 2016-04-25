var $female = $('.female');
var $male = $('.male');
var $carrot = $('.carrot');
var $carrottext = $('.carrottext');

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

$carrot.waypoint(function (direction) {
  if (direction == 'down') {
    $carrot.addClass('carrot-animate');
  } else {
    $carrot.removeClass('carrot-animate');
  }
}, {offset: '50%'});

$carrottext.waypoint(function (direction) {
  if (direction == 'down') {
    $carrottext.addClass('carrottextanimate');
  } else {
    $carrottext.removeClass('carrottextanimate');
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
