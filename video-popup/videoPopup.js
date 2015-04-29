// remap jQuery to $
(function($){

	//object for organizing code
	var videoHero = new Object;

	videoHero.popupVideo = function(){

	// Append backup slide for HTML5 video
		var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		var isPhone = false;
		
		if($('body').hasClass('mobile')){
			isPhone = true;
		}
		
		if (ismobile && isPhone != true) {
			$('#videohero .hero').prepend($('#videohero .hero img.tablet'));
			$('#videohero .hero video').remove();
			$('#videohero').addClass('isTablet');
		}

		if(isPhone == true){
			$('#videohero .hero video').remove();
		}

		$(".videoPopup, .mobile-over-text").on('click',function(){

			$("body").addClass("videoPopupActive");

			if( $("#dialogcontainer").length == 0 ) {
				$(document.body).append("<div id=\"dialogcontainer\"></div>");
			}				 

			var $dialogcontainer = $("#dialogcontainer");

			if(isPhone == true){
				var $containerContent = $('.videoPopup').data('youtube');
			}else{
				var $containerContent = $('.videoPopupContent').html();
			}
			var title = $(this).attr("_dialogtitle");
			if ( title == undefined ) title = null;

			$dialogcontainer.dialog({
				title: title,
				dialogClass: 'videoHeroDialog',
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

		//popup video
		videoHero.popupVideo();

		// Move video outside of it's container so it can be full width (only on desktop)
		if(!$('body').hasClass('mobile')){
			if ($('#hp-slot-2').find('#videohero').length) {
				$('#hp-slot-2').clone().prependTo("#main");
				$('#main .container #hp-slot-2').remove();
			}
		}

	});//end document ready


})(window.jQuery);
