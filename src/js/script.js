$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="icons/left_arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="icons/right_arrow.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                },
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    arrows: false,
                    dots: true,
                }
            }
        ]
      });
  });
          