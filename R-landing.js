// remap jQuery to $
(function($){

	//object for organizing code
	var customApp = new Object;

	$(window).resize(function(){
		customApp.instagramBoxHeight();
	});

	$(document).ready(function(){
		//fallback if javascript is disabled

		if(!$('body').hasClass('mobile')){
			$('.nojs').removeClass('nojs');
		}

		customApp.textureBackgrounds();
		// customApp.sectionHoverColors();

		//sliding in animated text on scroll in sections enter in number of text sections
		customApp.animatedSections(3);

		//fixing the boxHeights for the feed magnet section

		customApp.instagramBoxHeight();

		//replace instagram Logo


	});//end document ready


	customApp.instagramBoxHeight = function(){

		if(!$('body').hasClass('mobile')){

			boxHeight = function(){
				var smallBoxWidth = $('#classic .feedBox.updateSmall').width();
				var largeBoxWidth = $('#classic .feedBox.updateLarge').width();

				$('#classic .feedBox.updateSmall').css('height', smallBoxWidth);
				$('#classic .feedBox.updateLarge').css('height', largeBoxWidth);
				$('#classic .feedMagnet').css('height', largeBoxWidth);
			}

			if($('#classic .feedBox.updateSmall').length > 0){

				setTimeout(function(){
					if($('#classic .feedBox.updateSmall').length > 0){

						setTimeout(function(){
								boxHeight();
							}, 1000);
					} else {

					boxHeight();
					}}, 1000);

			} else{

				boxHeight();
			}
		} //end if !body mobile class
	}


	customApp.textureBackgrounds = function(){

		//changing the background color of the texture section from the data attribute hex color. 

		$('#classic .section').each(function(){

			var textureColor = $(this).find('.texture').data('bgcolor');
			var textColor = textureColor;

			function hexToRgb(hex) {	
		    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		    return result ? {
		        r: parseInt(result[1], 16),
		        g: parseInt(result[2], 16),
		        b: parseInt(result[3], 16)
		    } : null;
		}

		textureColor = hexToRgb(textureColor);

			var red = textureColor.r;
			var green = textureColor.g;
			var blue = textureColor.b;

			textureColor = "rgba(" + red +"," + green + "," + blue + ", .79)";
			// alert(textureColor);

			$texture = $(this).find('.texture-container');
		
			if(textureColor){
				$texture.find('h1').removeClass('nojs');
				//change the background and the h1 color on the texture sections
				$texture.css('background-color', textureColor);
				$texture.find('h1').css('color', textColor);
			}
			
		});
	}

	
	customApp.sectionHoverColors = function(){

		//change the text of the texture sections on hover
		//needs the jquery.color.js to work

		$('#classic .section').hover(function(){
			$(this).find('.text-box h1').stop().removeAttr('style');

		},function(){
			var textureColor = $(this).find('.texture').data('bgcolor');
			$(this).find('.text-box h1').stop().animate({color: textureColor}, 700);
		});
	}

	customApp.animatedSections = function(numberofsections){
		//animation on scroll disable if using a mobile device 
		var screenSize = $(window).width();
		var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		//add animate class if user is on a mobile/tablet device
		// if(ismobile){
		// 	$('.brain-wrapper, .sliding-text').addClass('animate');
		// }
		if (!ismobile){
			if(!$('body').hasClass('mobile')){

				// setting the variable for the animation for each section
				var count = 0;
				
				var pageHeight = $(document).height();
				var windowHeight = $(window).height();
				var bottomSection = $('.instagram-section').offset().top;
				var currentScrollPosition = $(window).scrollTop();
				bottomSection = bottomSection - ((windowHeight/4) * 3);

				
				$(window).scroll(function(){

					if(count < numberofsections){

						//getting the height of the current window to set the animation at the proper scroll position
						var windowHeight = $(window).height();
						var currentScrollPosition = $(window).scrollTop();

						//getting the scroll position of the next section
						var sectionScroll = $('#classic .section').eq(count).offset().top;

						//start the animation at the bottom 1/4th of the window on scroll
						var animateStart = sectionScroll - ((windowHeight/5) * 4);

						// currentScrollPosition = $(window).scrollTop();

						if(currentScrollPosition >= animateStart){

							$sectionToScroll = $('#classic .section').eq(count).find('.sliding-text');

							 //add the css class to animate

							 $sectionToScroll.closest('.section').find('.sliding-text').addClass('animate');


							//change the count so the next section will animate
							count += 1;
						}
					}

					var pageHeight = $(document).height();
					var windowHeight = $(window).height();
					// var bottomSection = $('.brain-section').offset().top;
					var currentScrollPosition = $(window).scrollTop();
					bottomSection = bottomSection - ((windowHeight/4) * 3);

				});//end window scroll
			}//end screen size
			
		} //end if is mobile
	};

})(window.jQuery);
