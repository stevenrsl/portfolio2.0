$('#menu').on('click', function() {
  $(this).toggleClass('menu-active');
  $('#overlay').toggleClass('nav-active');
});


$(document).ready(function() {
// Declare Carousel jquery object
var owl = $('.owl-carousel');

// Carousel initialization
owl.owlCarousel({
mouseDrag: false,
animateOut: 'fadeOutDown',
animateIn: 'fadeInDown',
margin: 0,
loop: true,
navSpeed: 500,
smartSpeed: 2000,
dots: true,
nav: false,
autoplay: false,
rewind: false,
items: 1
});
// Custom Button
$('.NextBtn').click(function() {
owl.trigger('next.owl.carousel');
});
$('.PreviousBtn').click(function() {
owl.trigger('prev.owl.carousel');
});
$(".DisBtn").click(function() {
  $("body").toggleClass("active");

});


});
