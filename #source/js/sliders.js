//SLIDERS
if($('.slider__exampes').length>0){
	$('.slider__exampes').slick({
		//autoplay: true,
		//infinite: false,
		dots: false,
		arrows: true,
		accessibility:false,
		slidesToShow:4,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow:3,
			}
		},
			{breakpoint: 768,
			settings: {
				slidesToShow:2,
			}},
			{breakpoint: 479,
				settings: {
					slidesToShow:1,
				}
		}]
	});
}
if($('.slider__programms').length>0){
	$('.slider__programms').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:4,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow:3,
			}
		},
			{breakpoint: 768,
			settings: {
				slidesToShow:2,
			}},
			{breakpoint: 479,
				settings: {
					slidesToShow:1,
				}
		}]
	});
}
