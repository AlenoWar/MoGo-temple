$(document).ready(function() {

	jQuery(".item").magnificPopup({
		type : "image",
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

})
	
jQuery(document).ready(function() {
	
	var sizer = '.sizer';

	var conteiner = $('#gallery');

	conteiner.imagesLoaded(function() {
		conteiner.masonry({
			itemSelector: '.item-masonry',
			columnWidth: sizer,
			percentPosition: true
		});
	});
});