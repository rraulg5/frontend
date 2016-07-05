(function() {
	$(function() {
		$('#our-services h1').css('opacity', 0);

		$('#our-services h1').waypoint(function() {
			$('#our-services h1').addClass('animated').addClass('fadeInLeft');
		}, {offset: '50%'});

		$('.diamond').css('opacity', 0);

		$('.diamond').css('opacity', 0);

		$('.diamond').waypoint(function() {
			$('.diamond').addClass('animated').addClass('fadeInDown');
		}, {offset: '100%'});
	});
})();