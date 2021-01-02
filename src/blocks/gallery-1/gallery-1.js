import 'jquery-colorbox';

if ($.colorbox) {
	$(".gallery-1 a:has(img)").colorbox({
		rel: 'gallery-1__item',
		photo: true,
		// current: false,
		maxWidth: '95%',
		maxHeight: '95%'
	});
	// $(".modal.youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
}
