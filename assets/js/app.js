$(document).ready(function(){
  setInterval(function() {
    $('.home').fadeOut();
    $('.first-section').show();
    $('.second-section').show();
  }, 2000);

  $('.dropdown-menu li:first').click(chinese);
  $('.dropdown-menu li:nth-child(2)').click(arabian);
  $('.dropdown-menu li:last-child').click(japanese);
  $('.first-section h1').click(homeresto);

  function chinese( ){
    $('.home-resto').fadeOut(500);
    $('.arabian').fadeOut(500);
    $('.japanese').fadeOut(500);
    $('.chinese').show();
  }

  function arabian() {
    $('.home-resto').fadeOut(500);
    $('.chinese').fadeOut(500);
    $('.japanese').fadeOut(500);
    $('.arabian').show();
  }

  function japanese() {
    $('.home-resto').fadeOut(500);
    $('.chinese').fadeOut(500);
    $('.arabian').fadeOut(500);
    $('.japanese').show();
  }

  function homeresto() {
    $('.japanese').fadeOut(500);
    $('.chinese').fadeOut(500);
    $('.arabian').fadeOut(500);
    $('.home-resto').show();
  }
  

});