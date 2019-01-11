$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$(".nav-item").removeClass('active');
		$(this).parent().addClass('active');
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 'slow', 'linear');
	});
});