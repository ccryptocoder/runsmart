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

	  function toggleSlide(className) {
		$(className).each(function(i) {
			$(this).on('click', function(e) {
			  e.preventDefault();
			  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	  }

	  toggleSlide('.catalog-item__back');
	  toggleSlide('.catalog-item__link');

	  //modal

	  $('[data-modal=consultation]').on('click', function() {
		  $('.overlay, #consultation').fadeIn();
	  }) ;
	  $('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	  });

	  $('.button_mini').each(function(i) {
		  $(this).on('click', function() {
			$('.overlay, #order').fadeIn();
			$('#order__descr').text($('.catalog-item__subtitle').eq(i).text());
		  })
	  })

	  /* $('.feed-form').each(function() {
		  $(this).validate();
	  }) */

	  function validateForm(form) {
		$(form).validate({
			rules: {
				name: 'required',
				tel: 'required',
				email: {
				  required: true,
				  email: true
				}
			},
			messages: {
				name: 'Это поле обязательно',
				tel: 'Это поле обязательно',
				email: {
					required: 'Это поле обязательно',
					email: 'Некорректный email адрес'
				}
  
			}
		});
	  }

	  validateForm('#consultation-form');
	  validateForm('#consultation form');
	  validateForm('#order form');


	  /* $('.button_submit').on('click', function() {
		$('#order').fadeOut(); 
		$('.overlay, #thanks').fadeIn('slow');
	  }); */

	/* const moreLinks = Array.from(document.querySelectorAll('.catalog-item__link'));
	const backLinks = Array.from(document.querySelectorAll('.catalog-item__back'));
	const catalogItemMainPages = Array.from(document.querySelectorAll('.catalog-item__content'));
	const catalogItemBackPages = Array.from(document.querySelectorAll('.catalog-item__list'));

	function toggleSlide(linkElements) {
		linkElements.forEach((link, index) => {
			link.addEventListener('click', (event) => {
				event.preventDefault();
				catalogItemMainPages[index].classList.toggle('catalog-item__content_active');
				catalogItemBackPages[index].classList.toggle('catalog-item__list_active');
			})
		})
	}

	toggleSlide(moreLinks);
	toggleSlide(backLinks); */

  });
		  