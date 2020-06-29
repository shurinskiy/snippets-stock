(() => {
	$('.tabs-1 .tabs-1__items').on('click', '.tabs-1__title', function(e) {
		e.preventDefault();
		let $block = $(this).next('.tabs-1__subitem');

		// if (window.matchMedia('(max-width: 780px)').matches) {
		if ($(this).css('backgroundImage') != 'none') {
			
			$('.tabs-1 .tabs-1__subitem:visible')
			.css('display','block')
			.not($block)
			.prev('.tabs-1__title')
			.removeClass('tabs-1__title_active')
			.end()
			.slideUp(300);

			$block
			.slideToggle(300)
			.prev('.tabs-1__title')
			.toggleClass('tabs-1__title_active');
			
		} else {

			$block
			.show(0)
			.prev('.tabs-1__title')
			.addClass('tabs-1__title_active');

			$(this)
			.parent('.tabs-1__item')
			.siblings()
			.find('.tabs-1__subitem')
			.hide(0)
			.prev('.tabs-1__title')
			.removeClass('tabs-1__title_active');
		}
	});
})();
