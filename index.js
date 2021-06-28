 // toggle menu/navbar script
 $(".menu-btn").click(function(){
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    $(".menu-btn").toggleClass("active");
    $("nav .container").toggleClass("active");
    $("nav").toggleClass("active");
});