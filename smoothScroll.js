smoothScroll = function(){

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