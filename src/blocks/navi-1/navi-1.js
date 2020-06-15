(() => {
	$(".navi-1__menu").on('touchstart', 'li:not(.hover)', function(e) {
		e.preventDefault();
		$(this)
		.addClass('hover')
		.siblings()
		.removeClass('hover');
	});	
	
	$('input.navi-1__toggle').on("change", function() {
		var $body = $('body');
		if ($(this).is(':checked')) {
			$body.css({
				'position': 'fixed',
				'overflow': 'hidden',
				'width': '100%'
			});
		} else {
			$body.removeAttr('style');
		}
	});
})();
