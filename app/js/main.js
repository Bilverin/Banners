$(document).ready(function() {
	var windowHeight = $(window).height(),
		windowWindth = $(window).width();
	if(windowHeight>windowWindth) {
		$('body').addClass('vert');
	} else {
		$('body').removeClass('vert');
	}
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