import 'owl.carousel';

(() => {
	$('.slider-1').owlCarousel({
		items:	3,
		loop: true,
		dots:	false,
		nav:	true,
		navText: ['',''],
		navContainer: '.slider-1',
		navClass: ['slider-1__prev','slider-1__next'],
		responsive:{
			0: { items: 1 },
			640: { items: 2 },
			780: { items: 3 },
			1100: { items: 4 },
		},
	});

})();
