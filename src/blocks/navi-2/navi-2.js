(() => {
	const navi = document.querySelector('.navi-2');
	const offset = navi.offsetTop;
	// console.log(parseInt(getComputedStyle(navi).height));

	function pinHeader() {
		navi.classList[(window.pageYOffset > offset ? 'add' : 'remove')]('navi-2_fixed');
	}
	window.onscroll = function () {
		pinHeader()
    };

})();
