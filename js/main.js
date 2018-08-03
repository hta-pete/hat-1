$(function(){

    var $window       = $(window); 

    //$('.menu').scrollTop( $('.menu').outerHeight()/2 );
    
   $window.on('scroll', function(){

    var scrollTop = $window.scrollTop();

    if( scrollTop > 180 ){
      $('.menu-btn').addClass('active');
    } else{
      $('.menu-btn').removeClass('active');
    }

    //$('#menu').removeClass('active');
    $('.menu-btn').removeClass('open');
    $('#menu').removeClass('active');

   });


   $('.menu-btn').on('click', function(){

    //$('#menu').fadeToggle('fast');
    $(this).toggleClass('open');
    $('#menu').toggleClass('active');

   });






    

});






