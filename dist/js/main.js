$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$(".nav-item").removeClass('active');
		$(this).parent().addClass('active');
		if(target !== "#intro" && $(window).width() <= 992) {
			$(".navbar-toggler").click();			
		}
		$('html, body').animate({ scrollTop: $(target).offset().top - 80}, 'slow', 'linear');
	});
});