$(document).ready(function(){
   $('.slider-pog').slick({
     dots: true,
   });
 });

 $('.your-element').on('afterChange', function(event, slick, currentSlide){
   console.log(currentSlide);
 });   