$(document).ready(function(){
  setInterval(function() {
    $('.home').fadeOut();
    $('.first-section').show();
    $('.second-section').show();
  }, 2000);

  $('.picture-1').mouseover(function () {
    $('.picture-content-1').show();
  }).mouseout(function () {
    $('.picture-content-1').hide();
  });

  $('.picture-2').mouseover(function () {
    $('.picture-content-2').show();
  }).mouseout(function () {
    $('.picture-content-2').hide();
  });

  $('.picture-3').mouseover(function () {
    $('.picture-content-3').show();
  }).mouseleave(function () {
    $('.picture-content-3').hide();
  });

  $('.picture-4').mouseover(function () {
    $('.picture-content-4').show();
  }).mouseout(function () {
    $('.picture-content-4').hide();
  });

  $('.picture-5').mouseover(function () {
    $('.picture-content-5').show();
  }).mouseout(function () {
    $('.picture-content-5').hide();
  });


  $('.dropdown-menu li:first').click(chinese);
  $('.dropdown-menu li:nth-child(2)').click(arabian);
  $('.dropdown-menu li:last-child').click(japanese);
  $('.first-section h1').click(homeresto);

  function chinese( ){
    $('.home-resto').fadeOut();
    $('.arabian').fadeOut();
    $('.japanese').fadeOut();
    $('.chinese').show();
  }

  function arabian() {
    $('.home-resto').fadeOut();
    $('.chinese').fadeOut();
    $('.japanese').fadeOut();
    $('.arabian').show();
  }

  function japanese() {
    $('.home-resto').fadeOut();
    $('.chinese').fadeOut();
    $('.arabian').fadeOut();
    $('.japanese').show();
  }

  function homeresto() {
    $('.japanese').fadeOut();
    $('.chinese').fadeOut();
    $('.arabian').fadeOut();
    $('.home-resto').show();
  }
  

});