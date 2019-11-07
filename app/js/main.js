$(function() {

	$('.slider').slick({
		dots: true,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});

	$('.btn').click(function () {
		$(this).css('background-color',' yellow');
	});

});






