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
});