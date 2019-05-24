// remap jQuery to $
(function($){

	//object for organizing code
	var customApp = new Object;

	/* trigger when page is ready */
	$(document).ready(function (){

		customApp.hoverImages();
		customApp.hoverNav();
		customApp.sliderHoverImages();
		customApp.hoverSearch();
		customApp.boxHeight();

		// Replace placeholders with temporary text if needed
		if (!placeholderIsSupported()) {
			$("input[placeholder], textarea[placeholder]").each(function(index) {

				// Set the value
				$(this).val($(this).attr('placeholder'));

				// Fill the value if blank and on blur
				$(this).blur(function() {
					console.log('blur');
					if ($(this).val() === '') {
						$(this).val($(this).attr('placeholder'));
					}
				});

				// Remove the value if placeholder and focus
				$(this).focus(function() {
					console.log('focus');
					if ($(this).val() == $(this).attr('placeholder')) {
						$(this).val('');
					}
				});
			});
		}

	});
	

	customApp.hoverImages = function(){

		//Image box change images  functions
		$('.small-images img').hover(function(){
			var filePath = $(this).attr('src');

			$('.bottom-image').attr('src', filePath);
			$('.top-image').stop(true, true).fadeOut(400, function(){
				$('.top-image').attr('src', filePath);
				$('.top-image').show();
			});
			
			$(this).css('opacity', '0.8');

		}, function(){
			$(this).css('opacity', '1');

		});

		//Large center image returns to original image when leaving the container

		$('.hover-section-container').hover(function(){},function(){
			var filePath = $('.large-image').data('path');
			$('.bottom-image').attr('src', filePath);
			$('.top-image').stop(true, true).fadeOut(400, function(){
				$('.top-image').attr('src', filePath);
				$('.top-image').show();
			});
		});

	};

	customApp.hoverNav = function(){

		//global variable for timeoutfunction to keep hover menu opened
		var delay=500, setTimeoutConst;

		//nav menu show hidden menu on hover

		//hover over li
		$('#crossfitShop .top-menu ul li').hover(function(){

		//clear the timeout function 
		clearTimeout(setTimeoutConst);

	

		//clearing out the hover function from different hover boxes

		$('.hover-nav').removeClass('show').hide();

		//finding which menu has been hovered over to open the correct sub-menu
		var index = $(this).index();

		//open up the hidden nav menu
		$('.hover-nav').eq(index).stop(true,true).slideDown();

		}, function(){

			//setting a class if the hover-nav menu has been entered to keep menu open and change alink color
			$('.hover-nav').hover(function(){
				var index = ($(this).index())-1;
				$(this).addClass('show');
				$('#crossfitShop .bottom-nav .top-menu ul li').eq(index).addClass('hoverState');
				$('.hoverState a').addClass('active');
		
			}, function(){
				$(this).removeClass('show').slideUp();
				$('.hoverState a').removeClass('active');
				$('.hoverState').removeClass('hoverState');
			});

			//set a time out to keep the menu open
			//close nav menu if not entered sub menu
			setTimeoutConst = setTimeout(function(){
				if(!$('.hover-nav').hasClass('show')){
					$('.hover-nav').stop(true, true).slideUp();
				}
			}, delay);

		});

	};

	customApp.sliderHoverImages = function (){
		//show hover boxes over slider and turn icon color on hover 

		//set timeout variable to delay hover out function
		var delay = 200, setTimeoutConst;

		$('#crossfitShop .circle-plus').hover(function(){
			//clear the timeout function 
			clearTimeout(setTimeoutConst);

			$(this).addClass('active');
			$(this).next('.hover-box').fadeIn();

			// allow hover box to stay open if it is hovered over
			$('#crossfitShop .hover-box').hover(function(){
				$(this).stop(true, true).addClass('show');
		
				//clear the timeout function 
			clearTimeout(setTimeoutConst);

			//hide the menu on hoverout

			}, function(){

				clearTimeout(setTimeoutConst); 
				$('.circle-plus').stop(true, true).removeClass('active');
				$(this).removeClass('show').fadeOut();
				

			});

		}, function(){

			setTimeoutConst = setTimeout(function(){
				//hide box only if it has not been hovered into

				if(!$('#crossfitShop .hover-box').hasClass('show')){

					$('#crossfitShop .circle-plus').stop(true, true).removeClass('active');
					$('#crossfitShop .circle-plus').next('.hover-box').stop(true, true).fadeOut();
			
				}

			}, delay);
		});
	};

	customApp.hoverSearch = function(){

		$('#crossfitShop .search-box').hover(function(){

			$('.hover-search').stop(true, true).slideDown();

		}, function(){

			$('.hover-search').slideUp();

		});
	};

	customApp.boxHeight = function(){

		//finding the height of the tallest box and setting the height for all to match the border
		$(window).load(function() {
			var boxHeight = -1;
			$('.hover-nav').show();

			$('.hover-nav').each(function() {
				$(this).find('.five-boxes').height($(this).height() - 42);
			});
			$('.hover-nav').hide();

		});
	};

	// Handle input placeholders
	function placeholderIsSupported() {
		var test = document.createElement('input');
		return ('placeholder' in test);
	}


})(window.jQuery);