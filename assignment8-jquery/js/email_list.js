 $(document).ready(function() {
	$("#email").focus();

	console.log("BEFORE VALIDATE ");

			
			
	$(".email_form_class").validate({
		rules: {
			
			email_address_name: {
				required: true,
			    email: true
			},
			
			full_name: {
				required: true,
				minlength: 2
			}
		},
		
		messages: {
			email_address_name: {
				required: "Please supply an email address.",
	          	email: "This is not a valid email address." 
							  
			},
			
			full_name: {
				required: "Please supply a full name."
			}
		}
		
	}); // end validate
   }); // end ready
