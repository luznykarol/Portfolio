$(document).ready(function() {

	$('.burger').click(function() {
		$(this).toggleClass('open');
	});

	$('.burger').click(function() {
		$('.navigation__list').slideToggle();
	});

	$('.navigation__link').click(function () {
		$('.navigation__list').slideToggle();
		$('.burger').toggleClass('open');
	});
	
	var navbarHeight = $('.navigation__nav').outerHeight();

	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top -navbarHeight
		}, 1000);
		return false;
	});

	$('.skill-box').hover(function() {
		$(this).children('.bubble').slideToggle();
	});
});