$('document').ready(function(){
// The document is now ready for things ========================================

  var $box = $('.box');
  var $reset = $('#reset');
  var color = 'white';
  var resetColor = 'reset-color'

  //Colors =========================
  var colors = 'white red blue green yellow';

  var $red = $('#red');
  var $blue = $('#blue');
  var $green = $('#green');
  var $yellow = $('#yellow');
  var $white = $('#white');


  $box.on('click', function() {
    $(this).addClass(color);
  });

  $box.on('dblclick', function() {
    $(this).removeClass(colors)
  });

  $reset.on('click', function(){
    $box.addClass('resetColor');
  });

  $red.on('click', function() {
    color = 'red';
  });

  $blue.on('click', function() {
    color = 'blue';
  });

  $green.on('click', function() {
    color = 'green';
  });

  $yellow.on('click', function() {
    color = 'yellow';
  });

  $white.on('click', function() {
    color = 'white';
  });


});
