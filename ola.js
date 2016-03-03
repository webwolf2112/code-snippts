/*******************
Stack-New Stack Name Here Section
*******************/

//endclose in a function to ensure that it doesn't conflict
( function( $ ) {

	//check to see if your object exists already if not then set it
	if ( typeof olapic == 'undefined' ) {
		
		//object for organizing code
		olapic = {
			token : 'tokenhere',
			init : function () {
				
				olapic.apiCall( this.token );
			},
			apiSuccess: function(data) {
				//json object from api
				var mediaArray = data.data._embedded.media,
					appendString;

				for (var i in mediaArray ){
					appendString = '<img src="' + mediaArray[i].images.original + '" alt= "" />';

					console.log( mediaArray[i].images.original );
					$( '.olapic').append( appendString );

				}

			},
			apiSingleSuccess: function (data){
				console.log( 'success', data.data._embedded.base_image.images );
				//json object from api
				var imgLink = data.data._embedded.base_image.images,
					appendString;

				
					appendString = '<img src="' + imgLink.original + '" alt= "" />';
					appendString += '<img src="' + imgLink.thumbnail + '" alt= "" />'
					$( '.olapic').append( appendString );

			


			},
			apiCall : function (token) {

				console.log( 'test' );

				var url = //url here

				//tag_based_key

				$.ajax({
					url : url,
					dataType: 'json',
					type: 'GET',
					success: function ( data ) {
						$( 'body').append(data);
						console.log( data );
					},
					error: function ( data ) {
					
						console.log( 'data not found' );
					}



				});


			
			}



		};


		$( document ).ready( function() {

			olapic.init();

		});//end document ready
	}
} )( window.jQuery );
