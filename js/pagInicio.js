$(document).ready(function(){
   setTimeout(function() {
      $('#splash').hide(500);
      $('#home').show(500);
   }, 2000);
   $('.slider').slider();

});


$( window ).scroll(navegador);


function navegador(){

    var $nav = $('.nav-wrapper');
    var scroll = document.body.scrollTop;
    if(scroll >= 100){
      $nav.css('background-color', 'rgba(71, 45, 103, 0.74)');
      $('nav').css('background-color', 'rgba(71, 45, 103, 0.08)');
  } else if (scroll <= 483){
      $nav.css('background-color', '#47334d');
      $('nav').css('background-color', '#47334d');
  }
}
