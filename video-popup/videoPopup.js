var customApp = {};

	//switching the header sections to the correct header
	customApp.headerSwitch = function(){
	//function to move to the three different sections

	var newMargin = 0;
	var sectionWidth = $('.all-sections').width();

	$('.middle-nav .top a').on('click', function(){
		$('.middle-nav .top a').removeClass('active-section');

		$(this).addClass('active-section');
			//getting the index of the link and animating the margin to the correct section
			var index = $(this).index(); 

			if(index > 0){
				newMargin = -(sectionWidth * index);
			} else{
				newMargin = 0;
			}

			//moving the top heading to the correct title
			$('.middle-nav .middle ul').animate({marginLeft: newMargin + "px"});

			//active sectiontitle
			customApp.activeSection();

			return false;


		}); 
}

	//switch sections
	customApp.switchSections = function(){
		//get section width and set the ul width
		var $allSections = $('.all-sections')
		var sectionWidth = $allSections.width();
		

	
		//click link to switch sections
		$('#yrpage .top-links div').on('click', function(){

			//scroll to the top of the section
			var sectionTop = $allSections.offset().top;
			$('body').animate({scrollTop: sectionTop}, 1000);

			//get the current index
			var index = $(this).index();
			var $section = $('#yrpage ul.sections');
			var $heading = $('#yrpage .middle-header ul');
			var $links = $('#yrpage .bottom ul');

			//get the negative margin for the current index
			var newMargin = sectionWidth * index;

			//animate the section, heading and links
			$section.animate({marginLeft: -newMargin});
			$heading.animate({marginLeft: -newMargin});
			$links.animate({marginLeft: -newMargin});


			//change the current class
			$('.middle-nav .top-links div').removeClass('active-section');
			$(this).addClass('active-section');


		});

	}

	//sticky navigation
	customApp.stickyNavigation = function(){

		var windowScroll = $(window).scrollTop();
		var $nav = $('#yrpage .middle-nav');
		var navTop = $nav.offset().top;
		var navHeight = $nav.height();

		//sticky function if browser refresh
		if(windowScroll > navTop){
			$nav.addClass('sticky');
			$('.small-section').css('padding-top', navHeight);
		}else{
			$nav.removeClass('sticky');
			$('.small-section').removeAttr('style');
		}

		//get the scroll positions and make sticky or remove sticky
		$(window).on('scroll', function(){
			windowScroll = $(window).scrollTop();
			
			if(windowScroll > navTop){
				$nav.addClass('sticky');
			}else{
				$nav.removeClass('sticky');
			}

		});

		

	}

	//smoothscroll
	customApp.smoothScroll = function(){

			//smooth scroll if not clicked on the carousel

			$(function() {

				//smooth scroll to links on the same page

				$('a[href*=#]:not([href=#carousel])').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						if (target.length) {
							$('html,body').animate({
								scrollTop: target.offset().top
							}, 1000);
							return false;
						}
					}
				});
			});

				//smooth scroll with #onload  ** must be below page function
				if(window.location.hash) {

					var hash = window.location.hash.substring(1);
					console.log(hash);
					hash = $('#' + hash);
					console.log(hash);

					$('html,body').animate({
						scrollTop: hash.offset().top
					}, 1000);
					return false;
				}

				//smoothScroll on same page links

			}

		//reebok popupVideo
		customApp.popupVideo = function(){

		// Append backup slide for HTML5 video
			var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
			var isPhone = false;

			if($('body').hasClass('mobile')){
				isPhone = true;
			}

			$(".videoPopup").on('click',function(){ 

				console.log("video popup clicked");

				$("body").addClass("videoPopupActive");

				if( $("#dialogcontainer").length == 0 ) {
					$(document.body).append("<div id=\"dialogcontainer\"></div>");
				}				 

				var $dialogcontainer = $("#dialogcontainer");

				//attach a different size video if mobile

				if(isPhone == true){
					var $containerContent = $('.videoPopup').data('youtube');
				}else{
					var $containerContent = $('.videoPopupContent').html();
				}
				var title = $(this).attr("_dialogtitle");
				if ( title == undefined ) title = null;

				$dialogcontainer.dialog({
					title: title,
					dialogClass: 'bestOfSportDialog',
					bgiframe: true,
					autoOpen: false,  
					modal: true,
					height: "auto",
					width: "auto",
					resizable: false,
					close: function() {
						$dialogcontainer.remove();
						$("body").removeClass("videoPopupActive");
					}
				});

				$dialogcontainer.html( $containerContent ).dialog('open');					

				// Autoplay the youtube video
				var $iframe = $dialogcontainer.find('iframe').first();
				$iframe.attr('src', $iframe.attr('src') + '?autoplay=true');
				return false;   
			});

	}
		






		$(document).ready(function(){

	//switch sections
	customApp.switchSections();

	//smooth scroll when clicked on ID links
	customApp.smoothScroll();

	//sticky Nav
	customApp.stickyNavigation();

	//Video PopUp
	customApp.popupVideo();
	

});// end document ready