$(document).ready(function(){
  $('.slider').slick({
    prevArrow:'.prev-arrow',
    nextArrow:'.prev-arrow',
    dots: true,
    dotsClass: '.slick-dots'
  });
});


function zxc() {
  document.getElementById('.slick-dots').classList.add = 'test-class'
}





  let numberArr = []

  function rndNumber(min,max) {
    let num = Math.floor(Math.random() * (max-min) + min);
    numberArr.includes(num) ? rndNumber(min, max) : numberArr.push(num)
    
    numberArr.forEach((element, index) => {
      console.log(index + ' - ' + element)
      
    })

  }







