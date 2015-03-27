$(document).ready(function(){

	//preload images

	$.preloadImages = function() {
  		for (var i = 0; i < arguments.length; i++) {
    		$("<img />").attr("src", arguments[i]);
  		}
	}

	$.preloadImages("http://preview.voltagead.com/reebok/honor-pack/img/img1-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img3-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img-main-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img4-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img5-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img7-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img6-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/img8-large.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-3-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-3-ro-bottom.png","http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-2-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-2-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-1-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4n-1-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-3-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-3-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-2-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-2-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-1-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano4m-1-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-3-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-3-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-2-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-2-ro-bottom.png", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-1-ro-top.jpg", "http://preview.voltagead.com/reebok/honor-pack/img/details-nano3mid-1-ro-bottom.png",  "http://preview.voltagead.com/reebok/honor-pack/img/icon-link-ro.png","http://preview.voltagead.com/reebok/honor-pack/img/icon-anchor-ro.png",  "http://preview.voltagead.com/reebok/honor-pack/img/icon-badge-ro.png");


//Image Slider function //
	var slidesAreChanging = false;
	var outstandingSlideToShow = -1;
	function changeSlides(selecedElement){
		var index = $(selecedElement).index();

		// Find the current slide, current button
		$currentSlide = $('#honorPack .slides.currentSlide');
		$currentIconButton = $('#honorPack .slide-icon.active');

		//associating the hover tag with the correct slides
		var currentSlideIndex = $currentSlide.index();
		$nextBottomSlideToShow = $('#honorPack .slider-container .bottom-text-box').eq(index);


		if (slidesAreChanging) {
			// If the slide is already changing, save the slide so we can change it later
			outstandingSlideToShow = index;
		} else {
	
			// Only change the slide if this slide is different
			if(currentSlideIndex != index) {

				// The slides are not changing, so go ahead and show the next slide
				outstandingSlideToShow = -1;

				// Lock the slideshow
				slidesAreChanging = true;

				//finding the next slider images, and button 
				$nextSlideToShow = $('#honorPack .slides').eq(index);
				$nextIconButton =  $('#honorPack .slide-icon').eq(index);

				// Put the next slide in between top slide and bottom
				$nextSlideToShow.addClass('nextSlideToShow');

				//getting the next button state to change and removing active class from old button putting it on the new button
				$currentIconButton.stop(true, true).removeClass('active');
				$nextIconButton.stop(true, true).addClass('active');

				//fade the current slide out , once complete then remove classes and add new ones
				$currentSlide.fadeOut(500, function(){
					$(this).stop(true, true).removeClass('currentSlide').show();
					$nextSlideToShow.stop(true, true).removeClass('nextSlideToShow').addClass('currentSlide');

					// Unlock the slider
					slidesAreChanging = false;

					// If there is an outstanding slide switch, make it here
					if (outstandingSlideToShow != -1) {
						changeSlides($('.section2 .three-boxes').eq(outstandingSlideToShow));
					}
					
				});
				
			}
			
		} //end if(currentSlideIndex != index)

	//changing the bottom slider to slide new images in

		$bottomSlide = $('#honorPack .slider-container .bottom-text-box');

	// animate the leftmargin to slide in depeding on the hover index number

		var bottomSlidePosition = "0px";

		if(index == 1){
			 bottomSlidePosition = "-1440px";
		}
		if(index ==2){
			bottomSlidePosition = "-2880px";
		}

		$bottomSlide.stop(true, true).animate({
		marginLeft: bottomSlidePosition
		}, 500);

	}


//slider with ON HOVER functions 

	$('.section2 .three-boxes').hover(function(){

		var index = $(this).index();

		$(this).find('.hoverbox').stop(true, true).slideDown();
		$(this).find('h2').addClass('red');
		$('.hover-icons').eq(index).addClass('active');
		$(this).find('.image-box').addClass('active');

		changeSlides(this);

	}, function(){

		$(this).find('.hoverbox').stop(true, true).slideUp();
		$('.hover-icons').removeClass('active');
		$(this).find('.image-box').removeClass('active');
		$(this).find('h2').removeClass('red');


	});	 //end hover function



// Slider Buttons ONCLICK Funtions
		
		//get the next icon to make it partially transparent 
		$partialTransparentIconButton = $('#honorPack .slide-icon.next');

		$('#honorPack .slide-icon').click(function(){

			changeSlides(this);
		});

//Hover for bottom slider 

	$('.sbox').hover(function(){
		$(this).find('.over-text').stop(true,true).fadeIn();
		$(this).find('.regular, .openIcon').stop(true,true).fadeOut();
		$(this).find('.openIcon').stop(true,true).hide();
	},function(){
		$(this).find('.over-text').stop(true,true).fadeOut();
		$(this).find('.regular, .openIcon').stop(true,true).fadeIn();
		// $(this).find('.openIcon').stop(true,true).fadeIn();
	});

	//Image box change images  functions

	$('.small-box').hover(function(){
		var largeImage = $(this).data('large');
		var filePath = $('.large-box').data('path') + largeImage;

		$('.bottom-image').attr('src', filePath);
		$('.top-image').stop(true, true).fadeOut(400, function(){
			$('.top-image').attr('src', filePath);
			$('.top-image').show();
			
		});
		$(this).css('opacity', '0.6');

	}, function(){
		$(this).css('opacity', '1');

	});

	 $('.hover-section-container').hover(function(){},function(){
	 	var filePath = $('.large-outer-box').data('main-image');
	 	$('.bottom-image').attr('src', filePath);
	 	$('.top-image').stop(true, true).fadeOut(400, function(){
			$('.top-image').attr('src', filePath);
			$('.top-image').show();
		});
	 });

	//styles for the sold out box 

	$('.soldout .product, .comingsoon .product').prepend('<img class="soldout-image" src="http://preview.voltagead.com/reebok/honor-pack/img/war-paint.png" >');

	//hover for product boxes 

	$('.product-box').not('.soldout, .comingsoon').hover(function(){
		$(this).find('.hover-text').stop(true, true).show();
	}, function(){
		$(this).find('.hover-text').stop(true, true).hide();
	});



});
