// $(document).ready(function () {
// 	$('.nav__burger').click(function (event) {
// 		$('.nav__burger,.menu').toggleClass('active')
// 	});
// });

$(function () {

	$('.header__nav').click(function (e) {

		if ($(e.target.closest('div')).hasClass('nav__burger')) {
			$('.nav__burger,.menu').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};

		$('.nav__burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	})
});