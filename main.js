$(document).ready(function(){
    //console.log("hello")
    $(window).scroll(function(){
        $('.navbar')[this.scrollY>20?"addClass":"removeClass"]("sticky");
        });
     // toggle menu/navbar script 
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     });
});
