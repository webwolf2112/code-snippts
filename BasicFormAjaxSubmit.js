//form with birthday checking

var newApp= {};

newApp.ajaxForm = function(idForm, idSubmitbutton, idEmail){

		// Variables for email submittion
		var emailSubmitted = false;

		var formId = idForm, 
			submitId = idSubmitbutton,
			emailId = idEmail;
		

		$(formId).on('submit', function(){

			var email = $(emailId).val();
			var day = $('.dobday').val();
			var month = $('.dobmonth').val();
			var year = $('.dobyear').val();



			function validateEmail($email) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if( !emailReg.test( $email ) ) {
					return false;
				} else {
					return true;
				}
			}

			if( email == '' || !validateEmail(email) ){

				alert('Please enter a valid email address')
				$(emailId).focus();
				return false;

			}else if(!day || !month || !year){

				alert('Please enter a valid birthday')
				return false;

			} 
			else if (!$( '#termsandconditions input' ).is(":checked")) {
				alert('Please agree to Reebok\'s Terms and Conditions');
				return false;
			}


			// This can only happen one time
			if(emailSubmitted) {

				return;
			}
			emailSubmitted = true;



			// Prepare target and data

			var url = $(formId).attr('action');
			var data = $(formId).serialize();

			// Submit form via AJAX
			$.ajax({
				type: 'POST',
				url: url,
				data: data,
				crossDomain: true,
				success: function(result) {
					$(formId).remove(); // Remove form from document
					$('#emailside .priv-policy').remove();
					$('#emailside #thankyou').fadeIn(200);
				},
				error: function(xhr, ajaxOptions, thrownError) {
					$(formId).remove(); // Remove form from document
					$('#emailside .priv-policy').remove();
					$('#emailside #thankyou').fadeIn(200);
				}

			});

			return false;
			
		});
	}
