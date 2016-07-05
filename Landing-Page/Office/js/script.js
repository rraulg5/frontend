(function() {
	$(function() {
		$('#our-services h1').css('opacity', 0);

		$('#our-services h1').waypoint(function() {
			$('#our-services h1').addClass('animated').addClass('fadeInLeft');
		}, {offset: '50%'});

		$('.diamond').css('opacity', 0);

		$('.diamond').waypoint(function() {
			$('.diamond').addClass('animated').addClass('fadeInDown');
		}, {offset: '50%'});

		$('#our-works h1').css('opacity', 0);

		$('#our-works h1').waypoint(function() {
			$('#our-works h1').addClass('animated').addClass('fadeInLeft');
		}, {offset: '70%'});

		$('#our-works img').css('opacity', 0);

		$('#our-works img').waypoint(function() {
			$('#our-works img').addClass('animated').addClass('zoomIn');
			$('#our-works img').css('opacity', 1);
		}, {offset: '70%'});
	});
})();