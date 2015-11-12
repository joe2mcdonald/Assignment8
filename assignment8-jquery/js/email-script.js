 $(document).ready(function() {

 alert( "Missing a field  1");
	console.log("BEFORE submit ");

  $(".email_form_class").submit({
		
		
//   alert( "Missing a field  a ");
		
	function(event) {
		var isValid = true;
		
		var email = $("#email_address").va();
		if (email == "") {
			$("#email_address").next().text("This field is required.");
			isValid = false;
			}
			
		var full_name = $("#full_name_id").val().trim();
		if (full_name == "") {
		    $("#full_name_id").next().text("This field is required.");
			isValid = false;
			}
	 
	alert( "Missing a field  b ");
				   
//	if (isValid == false) { 
		alert( "Missing email address or full name");
		event.preventDefault();
	//	}			   
	}  // end function			   
	});  //end submit
});   // end ready
	
			