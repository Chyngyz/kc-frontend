(function($){
	$(document).ready(function() {

		$('#menu-trigger').click(function(e){
			e.preventDefault();
			$('#main-menu').toggleClass('show');
		});

		$('#topmenu-trigger').click(function(e){
			e.preventDefault();
			$('#top-menu').toggleClass('show');
		})

 
	  	$("#hero-slider").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    autoPlay : true,
    		stopOnHover : false,
    		autoHeight : true,
    		transitionStyle: "fade"
		 
		    // "singleItem:true" is a shortcut for:
		    // items : 1, 
		    // itemsDesktop : false,
		    // itemsDesktopSmall : false,
		    // itemsTablet: false,
		    // itemsMobile : false
	 
	  	});


	  	$('.marquee').marquee({
			//If you wish to always animate using jQuery
			allowCss3Support: true,
			//works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
			css3easing: 'linear',
			//pause time before the next animation turn in milliseconds
			delayBeforeStart: 0,
			//'left', 'right', 'up' or 'down'
			direction: 'left',
			//true or false - should the marquee be duplicated to show an effect of continues flow
			duplicated: false,
			//speed in milliseconds of the marquee in milliseconds
			duration: 15000,
			//gap in pixels between the tickers
			gap: 20,
			//on cycle pause the marquee
			pauseOnCycle: false,
			//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
			pauseOnHover: true
		});


		// Go top!
	    $('#goto-top').on('click', function () {
	        $('html, body').animate({scrollTop: 0}, 'slow');
	    });

	    $(window).on("scroll", function () {
	        if ($(window).scrollTop() > 200){
	            $('#fixed-contacts').addClass('shown');
	        }
	        else if($(window).scrollTop() < 200) {
	            $('#fixed-contacts').removeClass('shown');
	        }
	    });

	    // Contact input mask
	    $("#order-call-num").mask("+996 (###) ##-##-##");


	    // Tabs on section home-1 and home-7
	    $('#popular-tabs a, #inbound-tours-tabs a ').click(function (e) {
		  e.preventDefault()
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active').tab('show');
		});

		// Tabs on section home-4
	    $('#popular-edu-tabs a').click(function (e) {
		  e.preventDefault()
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active').tab('show');
		})

		// radio buttons on section 6
		$('.btn-radio').click(function() {
			var target = '#' + $(this).data('target');
			$(target).prop("checked", true);
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}); 
	});

})(jQuery);
