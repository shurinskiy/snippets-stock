import { disablePageScroll, enablePageScroll } from 'scroll-lock';
const navi = '.navi-1';
const menu = '.navi-1__menu';
const submenu = '.navi-1__submenu';
const opened = 'navi-1__menu_opened';
const $navi = $(`${navi}`);
const $open = $(`${navi}`).find(`${menu}-open`);
const navi_top = $navi.data("top_offset");
const navi_bg = $navi.data("bg_color");


(() => {
	$navi.find(`${menu}`)
	.on('click touchstart', `${menu}-item_haschild, ${submenu}-item_haschild`, function(e) {
		var $self = $(this);

		if($open.css('display') !== 'block') return;

		if($self.children('ul').length > 0 && !$self.hasClass('hover')) {
			e.preventDefault();
			$self
			.addClass('hover')
			.siblings()
			.removeClass('hover');
		}
	});
	
	$navi.find(`${menu}-open, ${menu}-close, ${menu}`)
	.on('click', function(e) {
		
		if(e.target != this) return;
		e.preventDefault();

		let $menu = $(this).parents(`${navi}`).find(`${menu}`);

		if(!$menu.hasClass(opened)) {
			$menu.addClass(opened);
			disablePageScroll();
		} else {
			$menu.removeClass(opened)
			enablePageScroll();			
		}
	});

	function naviState() {
		let navi_height = $navi.height();
		let bottom_offset = $('.section:nth-of-type(4)').offset().top;
		let scroll = $(this).scrollTop();

		// $navi[(scroll > navi_top ? 'add': 'remove') + 'Class']('navi_fixed');

		if(scroll > (navi_top)) {
			$navi.css({
				position: "fixed",
				backgroundColor: navi_bg,
				paddingTop: 0,
				top: ""
			});
		} else {
			$navi.css({
				position: "",
				backgroundColor: "",
				paddingTop: ""
			});
		}

		if(scroll > (bottom_offset - navi_height)) {
			$navi.css({
				position: "absolute",
				top: `${bottom_offset - navi_height}px`
			});
		}
	}

	$(window).scroll(naviState);
	naviState();

})();
