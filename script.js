$(document).ready(function(){
	console.log("ready");
	
	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;
	
	var shake = function(){ 
		
		if(temp_x > 3 && flag === -1){ 
			shakepoint++;          
			flag = 1;            
		}
		else if(temp_x < -3 && flag === 1) 
		{				   
			shakepoint++;             
			flag = -1;                
		}
	}

	var firepoint = function(){
			if(shakepoint > 20){
	           $('.a01').addClass('a07');
	        }
	        else if(shakepoint > 17){
	           $('.a01').addClass('a06');
	        }
	        else if (shakepoint > 13){
	           $('.a01').addClass('a05');
	        }
	        else if(shakepoint > 10){
	           $('.a01').addClass('a04');
	        }
	        else if(shakepoint > 8){
	           $('.a01').addClass('a03');
	        }
	        else if(shakepoint > 5){
	           $('.a01').addClass('a02');
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

		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();

		var orgX = parseFloat(orgX); 
		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);


		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);
		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);
		
	}
	

	window.addEventListener("devicemotion", handleMotionEvent, true);
	setInterval(shake,100); 
	setInterval(firepoint,200);


});
