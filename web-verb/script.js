console.log('Linked');
//----------------------------------------------------------------//

var colors = ["#0000FF", "#3333FF", "#3333CC", "#6600FF", "#6600CC", "#9900FF", "#9900CC", "#CC00CC", "#CC0099", "#CC0066", "#CC0000", "#FF0000", "#FF3300", "#FF5050", "#FF6600", "#FF9933", "#FFCC00", "#FFFF00", "#CCFF33", "#99FF33", "#66FF33", "#33CC33", "#00CC66", "#00CC99", "#00FF99", "#00FFCC", "#33CCCC", "#0099CC", "#0066CC", "#0033CC", "#003399", "000099", "#0000CC"];
var start = 0;
function Hover() {
	var element = $(this);
   start = (start + 1) % colors.length;
   $(element).css('background-color', colors[start]);
   changeShape(element);
   setInterval(function(){
   		$(element).css('background-color', 'black');
   }, 10000);
}

function Reset(element){
	$(element).css('background-color', 'black');
}
//----------------------------------------------------------------//

function changeShape(element){
	var shapes = ["square", "circle", "triangle"]
	var random = Math.floor(Math.random()*shapes.length);
	var randomShape = shapes[random];

	if (randomShape=="square"){
			$(element).css('width','2vw');
			$(element).css('height','2.95vh');
			$(element).css('border-radius','0%');	

	} else if (randomShape=='triangle'){
			// $(element).css('width','0vw');
			// $(element).css('height','0vh');
			// $(element).css('border-radius','0%');

			// $(element).css('border-left','1vh solid black');
			// $(element).css('border-right','1vh solid black');
			// $(element).css('border-bottom','2vh solid red');

	} else if (randomShape=='circle'){
			$(element).css('width','2vw');
			$(element).css('height','2.95vh');
			$(element).css('border-radius','50%');
	};
}

//----------------------------------------------------------------//
window.onload = function(){
	$('.box').mouseenter(Hover);	
};


