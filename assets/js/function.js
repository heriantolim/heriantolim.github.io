$(function(){
  // Remove 'no-js' class as JavaScript is enabled
  $('html').removeClass('no-js');

  // Go to top
  $('.go-to-top').click(function(){
    $('html,body').animate({scrollTop:0},'fast');
  });
});
