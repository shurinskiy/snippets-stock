(() => {
	$('.parallax-1__effect').each(function(index, el) {
		let $this = $(el);
		let $window = $(window);
		let name = $this.attr("class");
		
		$this.prepend(`<div class='${name}-box' style='background-image:url(${$this.data("image")})'></div>`);

		let translateY = function() {
			let top = $window.scrollTop();
			let topOffsetEl = $this.offset().top.toFixed(2);
			let heightEl = $this.height();
			let bottomOffsetEl = (topOffsetEl - top + heightEl).toFixed(2);
			let speed = $this.data('speed') || 10;
			
			if ((top + $window.height()) > (topOffsetEl) && (topOffsetEl > (top - heightEl))) {
				$this.find(">:first-child").css({
					"transform" : "translateY("+ bottomOffsetEl/speed +"px)",
					"-webkit-transform" : "translateY("+ bottomOffsetEl/speed +"px)"
				});
			}

		}
		$window.scroll(translateY);
		translateY();
	});
})();
