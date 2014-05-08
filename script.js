$(document).ready(function(){
	console.log("ready");	

	/*function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;

		$("#xVal").html(x);
		$("#yVal").html(y);
		$("#zVal").html(z);

		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();

		var factor = 3;

		x = Math.round(x * factor);

		var orgX = $("#ball").css("left");
		orgX = parseFloat(orgX);

		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);

		$("#ball").css("left", Math.round(newX));

		y = Math.round(y * factor);

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);

		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);

		$("#ball").css("top", Math.round(newY));
	}
	
	window.addEventListener("devicemotion", handleMotionEvent, true);

	$("#ball").css("left", 30);
	$("#ball").css("top", 30);
	*/


	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;

	var shake = function(){ 

		if(temp_x > 5 && flag === -1){ 
			shakepoint++;         
			flag = 1;             
		}
		else if(temp_x < -5 && flag === 1) 
		{				  
			shakepoint++;             
			flag = -1;                 
		}
	}

	function handleMotionEvent(event) {

		var x = event.accelerationIncludingGravity.x; 
		var y = event.accelerationIncludingGravity.y; 
		var z = event.accelerationIncludingGravity.z; 
		x = Math.round(x); 
		temp_x = x;

		$("#xVal").html(Math.round(x));
		$("#sVal").html(shakepoint);

	}


	window.addEventListener("devicemotion", handleMotionEvent, true);
	
	shake();




});
