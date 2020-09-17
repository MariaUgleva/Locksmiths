$(function () {  
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img src="./img/arrow.png" class="carousel__arrow-prev"></img>',
    nextArrow: '<img src="./img/arrow.png" class="carousel__arrow-next"></img>',
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
