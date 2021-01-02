import 'owl.carousel';

(() => {

	let zIndex = function(e) {
		let $items = $(e.target).find('.owl-item');
		let total = $items.length;

		$items.each(function(index) {

			if(index < e.item.index) {
				$(this).css('z-index', total - e.item.index + index);
			} else if(index == e.item.index) {
				$(this).css('z-index', total);
			} else {
				$(this).css('z-index', total - index);
			}
		});
	}

	$('.slider-2').owlCarousel({
		// loop:	true,
		center: true,
		items:	3,
		nav:	false,
		dots:	false,
		responsive:{
			1680:	{ items: 8 },
			1440:	{ items: 7 },
			1280:	{ items: 6 },
			1100:	{ items: 5 },
			960:	{ items: 4 },
			780:	{ items: 3 }
		},
		onInitialized: zIndex,
		onChanged: zIndex,
		onResized: zIndex
	});


})();
