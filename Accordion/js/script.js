$(document).ready(function() {
	
	$("#main_id h2").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideToggle(1000);
	    }
    ); // end click
  
}); // end ready

