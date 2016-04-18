/*******************
Stack-Slider Section
*******************/

/* slick */
( function( $ ) {

	//check to see if object exists if not set the object below
	if ( typeof r20qSlider == 'undefined' ) {

		//object for organizing code
		r20qSlider = {
			init : function () {
				//get the path from the url to set the active class

				var currentPage = window.location.pathname,
					isloaded = false,
					activeSlide = 0,
					$activeSlide = null;

				$( '.js-slick li:not( ".slick-cloned" ) a' ).removeClass( 'active' ).each( function() {

						var $this = $( this ),
						    url = $this.attr( 'href' );

					if( url.pathname == currentPage ) {
						$( this ).closest( 'li' ).addClass( 'active' );
						$( this ).closest( 'li .question-container' ).prepend( '<div id="scrollTo"></div>' );
						$activeSlide = $( this ).closest( 'li' );
						activeSlide = $( this ).closest( 'li' ).index();
					}

				} );

				if ( $activeSlide !== null ) {
					$activeSlide.addClass( 'r20q-slide-active' );
				}

				// Init Slick
				this.slickFunction();

				//toggle between the grid and the slider
				this.gridToggle();

				$( window ).resize( this.calcGridHeight, 200 );

				// Disable empty or # hrefs for links
				$( '.over-text[href=""], .over-text[href="#"]' ).addClass( 'disabled' ).on( 'click', function( e ) {
					e.preventDefault();
					return false;
				} );

				$( '.over-text.disabled' ).on( 'click', function( e ) {
					e.preventDefault();
					return false;
				} );
			} ,
			calcGridHeight : function() {
				if ( $( '.js-grid-toggle' ).hasClass( 'grid' ) ) {
					$( '.slick-wrapper' ).css( 'height', $( '.rq-slider .js-slick' ).outerHeight( true ) );
				}

				var $gridWrap = $( '#js-grid-wrapper' );

				var scrollTop = $( window ).scrollTop(),
					elementOffset = $('.rq-slider').offset().top,
					topDistance = ( elementOffset - scrollTop );

				// Checking if distance to top is negative, then position the $gridWrap ass 100%x100% at top of screen
				if ( topDistance > 0 ) {
					$gridWrap.css( 'height', ( $( window ).outerHeight( true ) - topDistance ) );
					$gridWrap.css( 'top',  topDistance + 'px' );
				} else {
					$gridWrap.css( 'height', $( window ).outerHeight() );
					$gridWrap.css( 'top', '0px' );
				}
			},
			slickFunction : function () {
				if( ! r20qSlider.isMobile() ) {

					//initiate slick and move to the correct slide
					$( '.rq-slider .js-slick' ).slick( {
						slidesToScroll: 1,
						slidesToShow: 5,
						speed : 200,
						centerMode: true,
						initialSlide: activeSlide,
						centerPadding: 0
					} );
				}
			},
			gridToggle : function ( newHeight ) {

				//desktop grid toggle
				$( '.rq-slider .js-grid-toggle' ).on( 'click', function () {
					var $this = $( this );
					var $gridWrap = $( '#js-grid-wrapper' );
					$( 'body, html' ).css( 'overflow', 'hidden' ).css( 'height', '100%' );
					$( '.js-grid-toggle' ).hide();
					$gridWrap.addClass( 'show' );
					r20qSlider.calcGridHeight();
				} );

				// When grid overlay close button is clicked, remove the styling from grid-wrapper
				$( '#js-close-grid-overlay' ).on( 'click', function() {
					var $gridWrap = $( '#js-grid-wrapper' );
					$( 'body, html' ).css( 'overflow', 'auto' ).css( 'height', 'auto' );
					$( '.js-grid-toggle' ).show();
					$gridWrap.removeClass( 'show' );
				} );

				//mobile grid toggle
				$( '.rq-slider .js-mobile-grid-toggle' ).on( 'click', function () {
					var $grid = $( '.js-mobile-grid-list' );
					var $inner = $( '.js-mobile-grid-toggle' ).find('.inner');
					if ( $grid.height() == 0 ) {
						$grid.height( $(window).outerHeight( true ) - ( $( '#header' ).outerHeight( true ) + $( '.rq-slider h1' ).height() + $( '.mobile-grid-toggle' ).outerHeight() ) );
						$inner.html( $inner.attr( 'data-open-txt' ) );
						$( 'body,html' ).css( 'overflow', 'hidden' );
					} else {
						$grid.height( 0 );
						$( 'body' ).css( 'overflow', 'auto' );
						$inner.html( $inner.attr( 'data-closed-txt' ) );
					}
				} );
			},
			isMobile : function () {
				var isMobile = false;
				if( $( 'body' ).hasClass( 'mobile' ) ) {
					isMobile = true;
				}
				return isMobile;
			}
		};

		$( document ).ready( function() {

			r20qSlider.init();

		});//end document ready
	}
} )( window.jQuery );
