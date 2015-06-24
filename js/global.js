(function($){
	$('document').ready(function(){
		window.width = 0;

		$('#hero li img').each(function(idx, elem){
			width += $(elem).outerWidth();
		});

		$('#hero').css('width', width);


		$('.sub-nav li a').on('click', toggleActiveSlide);
		$('.sub-nav li:first-child a').trigger('click');

		startSlideTimer($('.sub-nav'));
	});

	function toggleActiveSlide(evt){
		evt.preventDefault();
		var $slides 	= $('#hero');
		var $navItems 	= $('.sub-nav');
		var idx 	    = $(this).data('idx');

		$slides.find('.active').removeAttr('class');
		$navItems.find('li.active').removeAttr('class');

		$(this).parent().addClass('active');
		$slides.find('li:eq('+ idx +')').addClass('active');
	}

	function startSlideTimer($navItems){
		window.$navItems = $navItems; 
		var time = 4000;
		
		window.setInterval(function(){
			var $next = $navItems.find('.active').next();

			if($next.length == 0) $next = $navItems.find('li:first-child');

			$next.find('a').click();
		}, time);
	}

}(jQuery))