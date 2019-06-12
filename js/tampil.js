var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var tempx = 0;
var tempy = 0;

$(document).ready(function() {
    selesai();
	
});
 
function selesai() {
	setTimeout(function() {
		update();
		selesai();
	}, 1);
}
 
function update() {
	$.getJSON("tampil.php", function(data) {
//		$("input").empty();
		var arraydatax = data.result[0];
		var arraydatay = data.result[1];
		var datax = arraydatax.x
		var datay = arraydatay.y
		nilai(datax,datay);
//		$.each(data.result, function(index, value) {
//			if(index = 10){			
//			var datax = this['x'];
//			var datay = this['y']; 
//			console.log(datax);
//			console.log(datay);
//			nilai(datax,datay);
//			$("input").attr("value", datax);
//		});
	});
	
}

function workspace(){
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(300, 400, 150, Math.PI, 2*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(300, 400, 100, Math.PI, 2*Math.PI);
	ctx.stroke();

	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(100,400);
	ctx.lineTo(500,400);
	ctx.stroke();

	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(300,400);
	ctx.lineTo(300,20);
	ctx.stroke();
}

function titikbulat(tempx,tempy){
	//fillRect(x,y,w,h)
	ctx.fillRect(tempx-4,tempy-4,8,8);
	//fillRect(x,y,w,h)
	
	ctx.clearRect(tempx-4,tempy-4,1,2);
	ctx.clearRect(tempx+3,tempy-4,1,2);
	ctx.clearRect(tempx-4,tempy+2,1,2);
	ctx.clearRect(tempx+3,tempy+2,1,2);
	
	ctx.clearRect(tempx-3,tempy-4,1,1);
	ctx.clearRect(tempx+2,tempy-4,1,1);
	ctx.clearRect(tempx-3,tempy+3,1,1);
	ctx.clearRect(tempx+2,tempy+3,1,1);
	ctx.moveTo(300,400);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();
}

function nilai(inputx, inputy){
	tempx = 300 + parseFloat(inputx);
	tempy = 410 - parseFloat(inputy);
	//console.log(tempx);
	//console.log(tempy);
	
	workspace();
	
	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(300,400);
	titikbulat(tempx,tempy);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();
}