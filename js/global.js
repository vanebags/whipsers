window.App = {};

(function($){
	$('document').ready(function(){
		window.width = 0;

		$('#hero li img').each(function(idx, elem){
			width += $(elem).outerWidth();
		});

		$('#hero').css('width', width);

		bindEvents();

		$('.sub-nav li:first-child a').trigger('click');
		startSlideTimer($('.sub-nav'));

	});

	function bindEvents(){
		$('.sub-nav li a').on('click', toggleActiveSlide);
		$('.reader').hover(slideUp, slideDown);
		$('.peopleNav li a').on('click', togglePerson);
	}

	function togglePerson(evt){
		evt.preventDefault();

		$(this).parent().parent().find('.active').removeClass('active');
		$(this).parent().addClass('active');
		var $intro 		= $('.intro');
		App.currentImg  = $(this).find('img').attr('src');
		App.selector 	= $(this).attr('href');
		App.$target 	= $('.bios').find(App.selector);

		
		//If there is an active bio, hide it, show the target

		//Otherwise just below
		if($intro.is(':visible')){
			$intro.fadeOut(100, function(){
				showBio(App.$target);
			});
		} else {
			hideBio($('.bio.active'));
		}
	}

	function showBio($target){
		window.scrollTo(0 ,0);
		if($target.find('img').length === 0){
			var img = $('<img />', {
				src: App.currentImg
			});
			$target.prepend(img);
		}

		$target.addClass('active').show().animate({
			width: '100%'
		});
	}

	function hideBio($bio){
		$bio.animate({
			width: 0
		}, 100, function(){
			$(this).hide().removeClass('active');
			showBio(App.$target);
		});
	}

	function slideUp($elem){
		$(this).find('img').slideUp(100).addClass('retracted');
	}

	function slideDown(){
		$(this).find('img').slideDown(100);
	}

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