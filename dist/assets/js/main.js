$(document).ready(function() {
	var windowHeight = $(window).height(),
		windowWindth = $(window).width();
	if(windowHeight>windowWindth) {
		$('body').addClass('vert');
	} else {
		$('body').removeClass('vert');
	}

	// mask
	$(".js-mask").mask("+7 (999) 999-9999");
});

$(window).resize(function() {
	var windowHeight = $(window).height(),
		windowWindth = $(window).width();
	if(windowHeight>windowWindth) {
		$('body').addClass('vert');
	} else {
		$('body').removeClass('vert');
	}
});

$(window).on('load', function() {
	$('.banner').addClass('animation');
});