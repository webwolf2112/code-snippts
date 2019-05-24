var aboutFunctions = {

	init : function () {
		//only show if it is on the about page
		if( $( '.about-page' ).length > 0 ) {
			this.relistItemsOnload();
			this.pressSlideshow();
			this.mobileShowMore();
			this.magazineHeightAdjust();

			//show the social section after the images are all loaded and remove the loading gif
			$( '.social-section' ).imagesLoaded( function() {
				$( '.social-section iframe' ).show();
				$( '.social-section .loading-gif' ).hide();
			});
		}
	},

	pressSlideshow: function () {
			
		$( '.js-filter-content' ).each( function () {

			/*for each section, grab all of the images and videos  get either the caption or the title append it to the correct div tag remove the originial seciton */
			var $this = $( this ),
				$thisImage,
				thisCaption, 
				galleryItem;

			$this.find( 'img, iframe' ).each( function () {
				$thisImage = $( this );

				//add the video class if it is an iframe
				if ( $thisImage.parent !== window ){
						$thisImage.addClass( 'video ' );
						var iframeData = $thisImage.attr( 'data-caption' );
					}
				//append the item and wrap it in a tag
				$thisImage.addClass( 'gallery' ).appendTo( $this.closest( '.js-press-content' ) ).wrap( '<div class="gallery-item modal-content"></div>' );

				//get the caption  
				if ( $thisImage.attr( 'alt' ) ) {

					thisCaption = '<div class="caption">' + $thisImage.attr( 'alt' ) + '</div>';
					$thisImage.parent().append( thisCaption );

				} else if ( iframeData ) {
					thisCaption = '<div class="caption">' + iframeData + '</div>';
					$thisImage.parent().append( thisCaption );
				}
			} );

			$this.remove();

		} );
		
		//activate the gallery lightbox
		$( '.js-gallery' ).on( 'click', function () {

			var $thisdialog = $( this ).next( '.js-press-content' ).clone();
			var h = $( window ).height() - 100;
		
			$thisdialog.dialog( {
				modal: true,
				content : $thisdialog,
				width : '90%', 
				maxHeight: h, 
				height: h,
				dialogClass: 'pressDialog',
				open : function () {
					$( this ).slick( {
						adaptiveHeight: false
					} );
					$( this ).find( ' iframe' ).css( { 'visibility' : 'visible' } );
				},
				close : function () {
					$( this ).dialog('destroy').remove();
				},
				create : function () {
					$( this ).closest( '.ui-dialog' )
						.find( '.ui-button:first' ).addClass( 'pressDialogButton' );
				}
			} );

		} );
	},
	relistItemsOnload: function () {
		//Sorting the magazines but title
		var mylist = $( '#sorting-list' );
		var listitems = mylist.children( 'li' ).get();
		listitems.sort(function( a, b ) {
			var compA = $( a ).attr( 'class' ).toUpperCase();
			var compB = $( b ).attr( 'class' ).toUpperCase();
		   return ( compA < compB ) ? -1 : ( compA > compB ) ? 1 : 0;
		});

		$( listitems ).appendTo( mylist );

		//removing the ul and li from the items
		$( '#sorting-list li' ).unwrap();
		$( '.press-item-section' ).unwrap();
		var count = 1;
	
		//adding the correct class to wrap the different press sections
		$('.press-item-section').each( function () {
			$this = $(this);
			switch(count){
				case 1 :
				$this.addClass('first-block');
				break;

				case 2:
				case 3:
					$this.addClass('second-block');
				break;

				case 4:
				case 5:
				case 6:
				case 7:
					$this.addClass('third-block');
				break;

				case 8:
					$this.addClass('fourth-block large-mobile');
				break;

				default :
					$this.addClass('last-block');
				break;
			}
			count++;
		});
		//wrapping each section in the correct tags for layout then appending the quotes in the correct place
			$( '.first-block' ).wrapAll( '<div class="magazine-one"></' );

			$( '.second-block' ).wrapAll( '<div class="magazine-two"></' );

			$( '.third-block' ).wrapAll( '<div class="magazine-three"></' );

			$( '.fourth-block' ).wrapAll( '<div class="magazine-four"></' );

			$( '.last-block' ).wrapAll( '<div class="magazine-last"></' );

			$( '.first-quote' ).appendTo( '.magazine-two' );

			$( '.second-quote' ).prependTo( '.magazine-last');

			$( '.magazine-three' ).append( '<div class="load-more">Show More</div>' );

			//show the magazines after the images are all loaded and remove the loading gif 
			$( '#magazines' ).imagesLoaded( function() {
				$( '#magazines' ).show();
				$( '.press-id .loading-gif' ).hide();
			});

	},
	mobileShowMore: function () {
		$( '.load-more' ).on( 'touchstart, click', function () {
			$( '.magazine-four' ).slideDown( function(){
				$( '.magazine-last' ).slideDown();
			});

			//remove the loadmore 
			$( this ).slideUp().remove();
		} );
	},
	magazineHeightAdjust : function () {

		var heightAdjustment = function () {
			//get the height of the tallest magazine so the sections will fall correctly on smaller screen sizes if the photos are different sizes
			var minHeight = 0;

			$( '.press-item-section' ).removeAttr( 'style' );

			$( '.press-item-section' ).each( function() {
				$this = $( this );

				if( $this.hasClass('large-mobile')){
					return false;
				}
			
				if ( $this.height() > minHeight ){
					minHeight = $this.height();
					
					$( '.press-item-section' ).css( 'min-height' , minHeight );
				}
			} );
		};

		// adjust the height of the 
		var heightAdjustmentDebounce = debounce(function() {
			$( '.press-item-section' ).removeAttr( 'style' );
			if ( $( window ).width() < 740 ){
				heightAdjustment();
			} 
		}, 25 );

		//Call debounce on window resizing
		window.addEventListener( 'resize', heightAdjustmentDebounce );

		$( '#page' ).imagesLoaded( function() {

				if ( $( window ).width() < 740 ){

					heightAdjustment();
				} 
			}
		);
		
	}
}

$( document ).ready( function () {
	aboutFunctions.init();
} );
