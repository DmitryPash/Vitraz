$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
  });

  function textArea() {
    document.getElementById('textarea').style.display = 'initial';
    document.getElementById('contact-us__buttons-coment').style.display = 'none';
    document.getElementById('contact-us__buttons-p').style.display = 'none';
    document.getElementById('contact-us__buttons').style.display = 'block';
}

(function changeTextElements(){
    document.getElementById('slick-slide-control00').innerText = 'СТЕКЛОПАКЕТЫ'
    document.getElementById('slick-slide-control01').innerText = 'ФУРНИТУРА И МЕХАНИЗМЫ'
    document.getElementById('slick-slide-control02').innerText = 'АВТОМАТИКА'
    document.getElementById('slick-slide-control03').innerText = 'ЗАМКИ'
}());

