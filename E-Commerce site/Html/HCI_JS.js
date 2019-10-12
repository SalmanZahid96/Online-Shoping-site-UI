$(document).ready(function(){

	
	$("#subbtn").click(function(){
		
		var strname = $("#txname").val();
		var straddress = $("#txaddrss").val();
		var strno = $("#txno").val();

		
		if(strname!="" && straddress!="" && strno!=""){
			$("#sureModal").modal();
		
		}
		
		if(strname==""){
			document.getElementById("error").innerHTML="Please fill the required information.";
		}
		if(straddress==""){
			document.getElementById("error").innerHTML="Please fill the required information.";
		}
		if(strno==""){
			document.getElementById("error").innerHTML="Please fill the required information.";
		}
		
		
		
		
		
	});


	$("#btncontinue").click(function(){

		$("#myModal1").modal();
		$("#myModal").hide();




	});

	
	$("#closebtn").click(function(){
		
		window.location.reload();
		
	});
	
});