$(document).ready(function(){
  //Cargador Inicial
  setInterval(function() {
    $('.home').fadeOut();
    $('.first-section').show();
    $('.second-section').show();
  }, 2000);

  //Hover
  $('.picture').hover(
    function() {
      $(this).find('.picture-content').addClass('show');
    }, function() {
      $(this).find('.picture-content').removeClass('show');
    }
  );

  //Eventos de click en el Dropdown
  $('.dropdown-menu li:first').click(chinese);
  $('.dropdown-menu li:nth-child(2)').click(arabian);
  $('.dropdown-menu li:last-child').click(japanese);
  $('.first-section h1').click(homeresto);

  //Funciones de cada categoría
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