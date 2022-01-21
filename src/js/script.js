$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="icons/left_arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="icons/right_arrow.png" alt=""></button>',
        /* adaptiveHeight: true, */
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

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
      });

      $('.catalog-item__back').each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
      });

      /* const moreLinks = Array.from(document.querySelectorAll('.catalog-item__link'));
      const backLinks = Array.from(document.querySelectorAll('.catalog-item__back'));
      const catalogItemMainPages = Array.from(document.querySelectorAll('.catalog-item__content'));
      const catalogItemBackPages = Array.from(document.querySelectorAll('.catalog-item__list'));

      moreLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            catalogItemMainPages[index].classList.toggle('catalog-item__content_active');
            catalogItemBackPages[index].classList.toggle('catalog-item__list_active');
        })
      })

      backLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            catalogItemMainPages[index].classList.toggle('catalog-item__content_active');
            catalogItemBackPages[index].classList.toggle('catalog-item__list_active');
        })
      }) */
  });
          