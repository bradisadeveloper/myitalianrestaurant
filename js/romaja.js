var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
/** $('#wines').hover(function() 
{ 
$('.options').css("background", 
"url(../images/wine.mp4)")

}).mouseleave(function(){
$('.options').css("background", "url(../images/roma1)"); 
}); **/

/** $( "#dishes" ).hover(function() {
    $('#homescreen').css("background", "url(../images/roma1.jpg");
}); **?

/** $( "#enemies" ).hover(function() {
    $('homescreen').css("background", "url(http://weknowyourdreams.com/images/fire/fire-02.jpg");
}); **/


  
/*
   $('#dishes-class').hover(function() 
{ 
    $('.homescreen').css("background", "url(../images/roma2.jpg)"); 
});  
*/