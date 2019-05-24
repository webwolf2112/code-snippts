/*tutorialFunction*/
/*checkingLocalStorage*/
/*addingFavoritesToTheDom*/
/*closeFunction*/
/*draggingFunction*/
/*favoriteBarMoveFunctions*/
/*sortingFunction*/
/*clickToAddFavorite*/

jQuery(document).ready(function($) {
	/*remove*/	
	localStorage.removeItem('visited');  

	//test if browser is supported 
	if(typeof(Storage) !== "undefined") {

/*tutorialFunction*/

		//checking to see if a cookie exists if not show the tutorial
		if(localStorage.getItem('visited')){
			
		}else{
			// Tutorial
			$('#favorites-container .tutorial').show();

			$('#favorites-container .bubble.one .btn').on('click', function(){
				$(this).closest('.bubble').fadeOut();
				$('#favorites-container .bubble.two').removeClass('hidden').animate({
					opacity: 1
				}, 200).addClass('animate');
				$('#favorites-container .fav-wrapper').stop().slideDown();
				$("#favorites-container .expand p").html('Collapse ').addClass('opened');
			});

			$('#favorites-container .bubble.two .btn').on('click', function(){
				$(this).closest('.bubble').fadeOut();
				$('#favorites-container .bubble.three').removeClass('hidden').animate({
					opacity: 1
				}, 200).addClass('animate');
				$('#favorites-container .expand p').html('Expand').removeClass('opened');
				// $('#favorites-container .favorite.tutorial-sample').fadeIn();
				$('#favorites-container .favorites').prepend('<div class="favorite ui-sortable-handle tutorial-sample"><img style="width: 100px; height: 100px;" src="tutorial-sample.jpg" alt=""><div data-number="0" class="close"></div></div>');
			});

			$('#favorites-container .bubble.three .btn').on('click', function(){
				$(this).closest('.bubble').fadeOut();
				$('#favorites-container .bubble.last').removeClass('hidden').animate({
					opacity: 1
				}, 200).addClass('animate');
				$('#favorites-container .expand p').html('Expand').removeClass('opened');
				$('#favorites-container .fav-wrapper').stop().slideUp();
				$('#favorites-container .favorite.tutorial-sample').remove();
			});

			$('#favorites-container .bubble.last .btn').on('click', function(){
				$(this).closest('.bubble').fadeOut();
			});	

			localStorage.setItem("visited", "true");
		}
		
/*checkingLocalStorage*/

		//getting the local storage information and setting varibles depending on the cookies
		if(localStorage.getItem('favorites')){
			//grab the current cookie 

			var jsonData = localStorage.getItem('favorites');
			jsonData = JSON.parse(jsonData);
			favoritesNumber = jsonData.favorites.length;

			if(favoritesNumber > 7){
				$('#favorites-container .favorites .see-more').show();
			}

			if(favoritesNumber > 0){
				$('.favorite.placeholder').remove();
			}

		}else{
			//set the json object if no cookie is found
			var jsonData ={"favorites": []};
			var favoritesNumber = 0;
		}

/*addingFavoritesToTheDom*/		

		//adding the number of favorites from the cookie onload
		$("#favorites-container .fav-number p").html(favoritesNumber);

		//appending the favorites icon onload
		$(".innercard .image img").each(function(){
				$(this).closest('div').prepend("<div class='favorite-product-icon'></div>");
			});

		//working with Local Storage

		if(localStorage.getItem("favorites")){

			//making it readable by the cookie
			var cookieString = JSON.stringify(jsonData);
			
			//parsing the JSON to be able to use variables
			var favoriteCookie = JSON.parse(localStorage.getItem("favorites"));

			//looping through the values to set the correct images in the favorites bar from the cookie
			//also setting the data attribute on close button to use with cookies
			var favorites = '';

			for(i=0; i<favoriteCookie.favorites.length; i++){
				favorites += "<div class='favorite'><a href='" + favoriteCookie.favorites[i].prodlink + "'><img src='" + favoriteCookie.favorites[i].image + "' alt='' /></a><div data-number='" + favoriteCookie.favorites[i].favoritesNumber + "' class='close'></div></div>";

				//checking and appending heart if favorite is already in cart
				var favoriteImageLink = favoriteCookie.favorites[i].image;

				$(".innercard img, .pt_productdetails #main-image img").each(function(){
					if($(this).attr('src') == favoriteImageLink){
						$(this).closest('div').find('.favorite-product-icon').addClass('active');

					}
				});

				$(".pt_productdetails #main-image img").each(function(){
					
					var favoriteProductLink = favoriteCookie.favorites[i].prodlink;
					if(window.location.href == favoriteProductLink){
						$(this).closest('div').prepend("<div class='favorite-product-icon active'></div>");
					}
				});




			}

			//appending the cookie items to the favorites bar on load
			$('.favorites').append(favorites);

			//adding in the Drop a Product Div at the end
			addPlaceholder();
			
		}

/*closeFunction*/

		//deleting the item and cookie when clicking the close box
		//must be inside of the document onclick since they are added to the dom via js

		//var to get correct favorites number without a page refresh
		var closeClicked = false;
		//setting variable to see if favorite is already in cart.
		var alreadyAFavorite = false;

		$('#favorites-alert-box div').on('click', function(){
			$(this).closest('#favorites-alert-box').fadeOut();
		});
		
		$(document).on('click', '#favorites-container .close', function() { 

			//disable the function if the tutorial is running
			if($(this).parent().hasClass('tutorial-sample')){
				return false;
			}

			// dont allow click until the function has completed
			if($('#favorites-container .fav-number p.slidingDown').is(':animated')){ return;}

			closeClicked = true;
			//remove height if favorites bar needs it
			favoritesHeight();

			// This is the favorites Number on the top of the bar animation funcitons

				//finding how many items are in your cart and subtracting it on click
				$("#favorites-container .fav-number p").addClass('removing');
				var favInCart = parseInt($('.fav-number p.removing').text());
				favInCart -= 1;

				//adding a negitive margin so the new paragraph will be hidden to allow the animation
				$("#favorites-container .fav-number p").before('<p class="slidingDown" style="margin-top: -5px">'+ favInCart + '</p>');
				//getting the line height of the new paragraph to create the correct margintop for the animation to scroll out of site
				var pLineHeight = $('#favorites-container .fav-number p.removing').height();

				$('#favorites-container .fav-number p.slidingDown').animate({
					marginTop: pLineHeight/3 + "px"
				}, 300, function(){
					$(this).removeAttr('style');
					$('#favorites-container .fav-number p.removing').remove();
					$(this).removeClass('slidingDown');

				});

			//delete the storage cookie
			localStorage.removeItem("favorites");
			//setting image
			var imagePath = $(this).parent('.favorite').find('img').attr('src');
			//setting product link
			var productLink = $(this).parent('.favorite').find('a').attr('href');
			//setting fav number - used to remove object from json array
			var favNumber= $(this).data("number");

			//hide the see more button if less then 5 favorites
			if(favInCart == 6){
				$('#favorites-container .favorites .see-more').hide();
			}

			$(this).closest(".favorite").remove();

			 //looping through the data to remove the object with the matching favorite number (set in drop function)
			 for(i=0; i<jsonData.favorites.length; i++){
			 	if(jsonData.favorites[i].favoritesNumber === favNumber) {
			 		jsonData.favorites.splice(i,1);
			 	}

			 }

			//set a new coookie if the value is greater then 0
			if(favInCart > 0){
				//making it readable by the cookie
				var cookieString = JSON.stringify(jsonData);
				localStorage.setItem("favorites", cookieString);

			}

			//remove the favorite icon from product list page
			$(".innercard img").each(function(){

					if($(this).attr('src') == imagePath){

						$(this).closest('div').find('.favorite-product-icon').removeClass('active');
					
					}

			});

			//remove the favorite icon from the product detail page
				$('.pt_productdetails #main-image img').each(function(){
					
					if(window.location.href == productLink){
						$(this).closest('div').find('.favorite-product-icon').remove();
					}
				});
		});

/*favoriteBarMoveFunctions*/
		//expanding/collapsing the favorites menu
		$('.expand').click(function(){

			if($("#favorites-container .favorites").is(':visible') ? $('#favorites-container .expand p').html('Expand').removeClass('opened') : $("#favorites-container .expand p").html('Collapse ').addClass('opened'));

			$('#favorites-container .fav-wrapper').stop().slideToggle();

			
		});


		//expanding the favorites bar on click 

		$('#favorites-container .see-more').click(function(){

			$favorites = $('#favorites-container .favorites');

			if ($("#favorites-container .favorites").hasClass('showAll')) {
				$favorites.removeClass('showAll');
				$('#favorites-container .see-more').html('<p>See More</p>').removeClass('less');
				$favorites.stop(true,true).animate({
					height: 120
				}, 300);

			} else {
				$favorites.addClass('showAll');
				$('#favorites-container .see-more').html('<p>See Less</p>').addClass('less');
				var newHeight = $favorites.css('height', 'auto').height();
				$favorites.removeAttr('style');
				$favorites.stop(true,true).animate({
					height: newHeight
				}, 300);
			}			
		});

/*draggingFunction*/

		//open the favorites bar on drag
		$(".innercard img, .favorite-product-icon").mousedown(function(){
			openFavBar();
		});

		function loadDraggableProducts() {
			if ($.fn.draggable) {
				
				$(".innercard img, .pt_productdetails #main-image img").draggable({
					//grabbing the information from the selected element, cloning it and appending it to the favorites bar
					start: function(event, ui){
					 	
						var imgSrc = $(this).attr('src');
						var count = 0;

						// //check to see if it is already a favorite
						$('.favorite').not('.unsortable').each(function(){
							var favoritesImagePath = $(this).find('img').attr('src');
							if(imgSrc == favoritesImagePath){
								if(count >=1){
									alreadyAFavorite = true;
									// $('#favorites-container .expand p').html('Expand').removeClass('opened');
									$('#favorites-alert-box').show();

								}
								count ++;
							}
						});
						if(alreadyAFavorite == false){
							
							//adding a class to append the favorite heart image
							$(this).closest('div').addClass('addingFavorite');

							//adding a dropping class on background
							$('#favorites-container .top-bar-wrapper').addClass('dropping');
							
							//add height if favorites bar needs it
							$favorites = $('#favorites-container .favorites');
							
							if($favorites.hasClass('showAll')){
								var newHeight = $favorites.css('height', 'auto').height();
								$favorites.stop(true,true).animate({ height: newHeight }, 300);
							}
						}else{
							alreadyAFavorite = false;
							return false;

						}

					},
					helper: function(e) {
					
					//grabbing the img src and product link
						var imgSrc = $(this).attr('src');

						//if it is a PDP page grab the current page if it is a PLP page grab the correct product page
						if($('.pt_productdetails #main-image').length > 0){
							var productLink = window.location.href;
						}else{
							var productLink = $(this).closest('.image').find('a').attr('href');
						}
						var favoritesNumber = jsonData.favorites.length;

						$(this).addClass('draggedElement');
				    	//wrapping the dragged element inside of the correct tags to sort
				    	return $('<div class="favorite ui-sortable-handle dragging" style="z-index: 9999; display:block;"><a href="' + productLink + '"><img style="width: 100px; height: 100px;" src="' + imgSrc + '" alt=""></a><div data-number="'+favoritesNumber + '" class="close"></div></div>');

				},
				connectToSortable: ".favorites",
				revert: function(is_valid_drop){
					//remove the adding favorite class if it is not dragged to the sortbar
					if(!is_valid_drop){
						$(this).closest('.image').removeClass('addingFavorite');
					}	
				},
				zIndex:'9999',
				cursorAt: {
					top: 50,
					left: 50
				},
				scroll: false,
				stop: function(event, ui){

					$(ui.helper).removeClass('dragging');

					//remove the inline style created by the jquery ui sorting function so the items will have the correct z-index
					$('.favorite').removeAttr('style');

					//remove the dropping class incase the drop was not successfull
					$('.top-bar-wrapper').removeClass('dropping');

				}

			});

} else {
			setTimeout(loadDraggableProducts, 250); // Give some more time for draggable to load
		}
	}

		//making the images draggable
		loadDraggableProducts();
		
		

/*sortingFunction*/
		
		//making the favorites sortable
		$(".favorites").sortable({
			zIndex: 9999,
			forcePlaceholderSize: true,
			placeholder: "sortable-placeholder",
			items: "> div:not(.unsortable)",
			start: function(){
				//clear local storage
				localStorage.removeItem("favorites");
			},
			stop: function(){

			 	//clear the json object to repopulate
			 	jsonData = {"favorites": []};

			 	//getting the correct order to populate the json object
			 	$('.favorite').not('.unsortable').each(function(){
			 		var productLink = $(this).find('a').attr('href');
			 		var imagePath = $(this).find('img').attr('src');

			 		jsonData['favorites'].push({ 'prodlink':productLink,'image': imagePath, 'favoritesNumber' : $(this).find('.close').data('number') });
			 	}
			 	);
			 	//resetting the local storage cookie
			 	var cookieString = JSON.stringify(jsonData);
			 	localStorage.setItem("favorites", cookieString);

				//remove the inline style created by the jquery ui sorting function so the items will have the correct z-index
				$('.favorite').removeAttr('style');

			},
			receive: function(){
				//clear the json object to repopulate

				//getting the correct order to populate the json object
			 	$('.favorite').not('.unsortable').each(function(){
			 
			 		var productLink = $(this).find('a').attr('href');
			 		var imagePath = $(this).find('img').attr('src');
			 		// console.log(imagePath);

			 		jsonData['favorites'].push({ 'prodlink':productLink,'image': imagePath, 'favoritesNumber' : $(this).find('.close').data('number') });
			 	}
			 	);

					jsonData = {"favorites": []};

				 	//resetting the local storage cookie
				 	var cookieString = JSON.stringify(jsonData);
				 	localStorage.setItem("favorites", cookieString);

					//remove the inline style created by the jquery ui sorting function so the items will have the correct z-index
					$('.favorite').removeAttr('style');

					//adding the favorite icon to the product

					$('.addingFavorite').find('.favorite-product-icon').addClass('active');
					$('.addingFavorite').addClass('your-favorite').removeClass('addingFavorite');

					favoritesHeight();

					// adding the see more button if there are more then 7 products
					$("#favorites-container .fav-number p").addClass('removing');
					var favInCart = parseInt($('.fav-number p.removing').text());
				
					
					favInCart += 1;

					if(favInCart > 7){
						$('#favorites-container .favorites .see-more').show();
					}

				
					addPlaceholder();

					$('#favorites-container .top-bar-wrapper').removeClass('dropping');

					// This is the favorites Number on the top of the bar animation funcitons

						//adding a negitive margin so the new paragraph will be hidden to allow the animation
						$("#favorites-container .fav-number p").before('<p class="slidingDown" style="margin-top: -5px">'+ favInCart + '</p>');
						//getting the line height of the new paragraph to create the correct margintop for the animation to scroll out of site
						var pLineHeight = $('#favorites-container .fav-number p.removing').height();

						$('#favorites-container .fav-number p.slidingDown').animate({
							marginTop: pLineHeight/3 + "px"
						}, 300, function(){
							$(this).removeAttr('style');
							$('#favorites-container .fav-number p.removing').remove();
							$(this).removeClass('slidingDown');

						});
						//removing the prevent scrolling style
						$('body').removeAttr('style');

					}
				});

/*clickToAddFavorite*/
			 
			$(document).on('click', '.favorite-product-icon', function(){

				//open the favorites bar
				openFavBar();

				//get the links and add to the favorites bar
				imgSrc = $(this).closest('.image').find('img').attr('src');
				productLink = $(this).closest('.image').find('a').attr('href');

				//not allowing if already a favorite
				var imgSrc = $(this).closest('.image').find('img').attr('src');
						// var count = 0;

					// //check to see if it is already a favorite
					$('.favorite').not('.unsortable').each(function(){
						var favoritesImagePath = $(this).find('img').attr('src');
						if(imgSrc == favoritesImagePath){
								alreadyAFavorite = true;
								$('#favorites-alert-box').show();
								setTimeout(function(){
									alreadyAFavorite = false;
								}, 1000);

						}
					});

					if(alreadyAFavorite == false){
						favoritesNumber += 1;
						
						favToPrepend = '<div class="favorite ui-sortable-handle"><a href="' + productLink + '"><img style="width: 100px; height: 100px;" src="' + imgSrc + '" alt=""></a><div data-number="'+favoritesNumber + '" class="close"></div></div>';
						
						$('.favorites').append(favToPrepend);

						addPlaceholder();

						$("#favorites-container .fav-number p").addClass('removing');
						var favInCart = parseInt($('.fav-number p.removing').text());

						favInCart += 1;

						if(favInCart > 7){
								$('#favorites-container .favorites .see-more').show();
							}

						//repopulate the json data
						repopulateJsonData();

						//adding the number in the favorites bar
						addToFavoriteCount();

						//turn the heart to filled heart
						$(this).addClass('active');
					}

			});



} else {
		// Sorry! No Web Storage support..
		$("#favorites-bar .content").html("You Do not have browser support for this feature, please upgrade your browser");
	}



	function addToFavoriteCount(){
	// This is the favorites Number on the top of the bar animation funcitons

	//finding how many items are in your cart and subtracting it on click
	$("#favorites-container .fav-number p").addClass('removing');
	var favInCart = parseInt($('.fav-number p.removing').text());
	favInCart += 1;

		//adding a negitive margin so the new paragraph will be hidden to allow the animation
		$("#favorites-container .fav-number p").before('<p class="slidingDown" style="margin-top: -5px">'+ favInCart + '</p>');
		//getting the line height of the new paragraph to create the correct margintop for the animation to scroll out of site
		var pLineHeight = $('#favorites-container .fav-number p.removing').height();

		$('#favorites-container .fav-number p.slidingDown').animate({
			marginTop: pLineHeight/3 + "px"
		}, 300, function(){
			$(this).removeAttr('style');
			$('#favorites-container .fav-number p.removing').remove();
			$(this).removeClass('slidingDown');

		});
	}


	function addSeeMoreLink(){
		//adding the see more button if there are more then 7 products
		$("#favorites-container .fav-number p").addClass('removing');
		var favInCart = parseInt($('.fav-number p.removing').text());
	
		
		favInCart += 1;

		if(favInCart > 7){
			$('#favorites-container .favorites .see-more').show();
		}
	}


	function openFavBar(){
		if($(".fav-wrapper").is(':hidden')){

				$favorites = $('#favorites-container .favorites');
				$('.fav-wrapper').show();
				$favorites.addClass('showAll');
				$('#favorites-container .see-more').addClass('less').html('<p>See Less</p>');
				var newHeight = $favorites.css('height', 'auto').height();
				$favorites.removeAttr('style');
				$favorites.stop(true,true).animate({
					height: newHeight
				}, 300);
				$("#favorites-container .expand p").html('Collapse ').addClass('opened')
			}
	}


	function addPlaceholder(){
		//remove current placeholder if one exists
		$('.favorite.placeholder.unsortable').remove();
		
		//append new placeholder box 
		setTimeout(function(){
			$('.favorite:last-of-type').after('<div class="favorite placeholder unsortable"><p>Drag A Product</p></div>');
		}, 100);
	}

	//function to change the data-number on each list item to allow the items to be in the correct order in the json object for the local storage
	// function changingDataNumber(){
	// 	$('.favorite').not('.unsortable').each(function(){
	// 		var newFavNumber = $(this).index();
	// 		$(this).find('.close').data('number', newFavNumber);
	// 	});
	// }

	function favoritesHeight(){
		$favorites = $('#favorites-container .favorites');		
		if($favorites.hasClass('showAll')){
			var newHeight = $favorites.css('height', 'auto').height();
			$favorites.stop(true,true).animate({
				height: newHeight
			}, 200);

		}
	}
	function repopulateJsonData() {
		//resetting and repopulating the json array
			jsonData = {"favorites": []};
				
			//getting the correct order to populate the json object
		 	$('.favorite').not('.unsortable').each(function(){
		 
		 		var productLink = $(this).find('a').attr('href');
		 		var imagePath = $(this).find('img').attr('src');
		 		// console.log(imagePath);

		 		jsonData['favorites'].push({ 'prodlink':productLink,'image': imagePath, 'favoritesNumber' : $(this).find('.close').data('number') });
		 	}
		 	);

			 //resetting the local storage cookie
			 var cookieString = JSON.stringify(jsonData);
			 localStorage.setItem("favorites", cookieString);
		}	

}); 



