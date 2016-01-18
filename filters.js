	//filter button functionality need to add back in if cleint wants back in
	filterButtons : function () {

		$( '.js-filter p' ).on( 'click' , function () {
			var filterData = $( this ).attr( 'data-filter' ),
				height = 0,
				colNumber = 4,
				count = 1,
				margin = $( '.team-member:first-of-type' ).css( 'marginRight' );

			if( $( window ).width() < 740 ){
				colNumber = 3;
			}

			//calculate the height so the rows will appear correcly when filtered it is calculated but the height of the tallest team mamber
			$( '.team .team-member' ).each( function () {
				if( height < $( this ).height() ) {
					height = $( this ).height();
				}
			} );

			$( '.team .team-member' ).css( { 'height' : height } );

			//hide all of the team members and headings, only show the team members that match the filterdata
			$( '.team .subheading, .team .team-member' ).hide();

			//show the view all button
			$( '.' + filterData + ' , .js-view-all' ).show();

			//loop through the visible items to make sure that there are not dulpicates	and also adding the new margins so it will match the design & adding the correct margin

			$( '.team .team-member:visible' ).each( function () {
				var src = $( this ).find( 'img' ).attr( 'src' );
				var $duplicate = $( '.team .team-member:visible img[src="' + src + '"]' );
				if( $duplicate.length > 1 ){
				$duplicate.not( ':first' ).closest( '.team-member' ).hide();
				}

			} );

			//loop through the new visibles and then add the correct margin
			var doesExist = false;

			$( '.team .team-member:visible' ).each( function () {

				if( count == colNumber ){
					count = 1;
					$( this ).css( 'marginRight', 0 );
				}else {
					count ++;
					$( this ).css( 'marginRight', margin );
				}

				doesExist = true;

			} );

			if ( ! doesExist ) {
				$( '.none-exist' ).show();
			}

			//smooth scroll to the top of the team section
			var scrollPos = $( '.team' ).offset().top - $( '#nav' ).height();
			$( 'html,body' ).animate( { scrollTop: scrollPos }, 1000 );

		} );

		$( '.js-view-all a' ).on( 'touchstart click', function () {
			$( '.js-view-all' ).hide();
			$( '.team .team-member' ).removeAttr( 'style' );
			$( '.team .subheading, .team .team-member' ).show();
			$( '.none-exist' ).hide();
		} );

		$( '.js-filter a' ).on( 'touchstart click', function () {
			$( '.team .subheading, .team .team-member' ).show();
		} );
	},
