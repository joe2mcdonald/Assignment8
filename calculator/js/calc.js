$(document).ready(function(){            
// DOCUMENT IS READY
	
$(".number,.symbol").click(function(){   // IF (+ - * /) SYMBOL IS CLICKED
var value = $(this).val();               // THIS GETS VALUE FROM RESULT TEXTBOX
$('#resultId').val($('#resultId').val() + value);  // ADDED TO THE RESULT TEXTBOX
});
	
//  CLEAR  VALUES 	
$('#clearId').click(function(){           // IF CLEAR IS CLICKED
$('#resultId').val('');
$('#operId').val('');
$('#operId').removeClass('activeAnswer');  // REMOVE ACTIVEANSWER CLASS FROM OPERATION 
$('#equalsId').attr('onclick','');         // CLEAR THE ATTRIBUTE OF THE EQUALSID  
$("#resultId").css({"background-color": "#f1ff92" });
});
	
//  CALCULATION	OF RESULT TEXT 
$('#equalsId').click(function(){            // IF EQUAL IS CLICKED
var calc = $('#resultId').val();            // ASSIGNS THE VARIABLE WITH THE RESULT DATA
$('#resultId').val(eval(calc));             // EVAL CALCULATIO
$("#resultId").css({"background-color": "#92eaff" });
});
});  // END OF DOCUMENT READY