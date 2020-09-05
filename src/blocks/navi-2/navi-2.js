import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {

	const navi = document.querySelector('.navi-2');
	const stop_section = document.querySelector('.section:nth-of-type(8)');
	const parent = navi.parentNode;

	document
	.querySelector('input.navi-2__toggle')
	.addEventListener('change', function(e) {
		e.preventDefault();
		
		if(this.checked) {
			// body.style.position = 'fixed';
			// body.style.overflow = 'hidden';
			// body.style.width = '100%';
			disablePageScroll();
		} else {
			// body.style = '';
			enablePageScroll();
		}
	});

	function pinHeader() {
		let offset = parseInt(getComputedStyle(parent).paddingTop) + parent.offsetTop;
		navi.classList[window.pageYOffset > offset ? 'add' : 'remove']('navi-2_fixed');

		/* дополнительно, чтобы не мешалось на страничке */
		if(window.pageYOffset > stop_section.offsetTop) {
			navi.style.display = 'none';
		} else {
			navi.removeAttribute('style');
		}
	}

	window.onscroll = function () {
		pinHeader();
	};

})();
