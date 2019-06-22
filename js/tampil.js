var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var tempx = 0;
var tempy = 0;
var weblink = 'http://127.0.0.1/webPA/tampil.php';
var acuanX= 200;
var acuanY= 400;

$(document).ready(
	function() {
    	selesai();
	}
);
 
function selesai() {
	setTimeout(function() {
		update();
		selesai();
	}, 200);
}
 
function update() {
	$.getJSON(weblink, function(data) {
		var arraydatax = data.result[0];
		var arraydatay = data.result[1];
        var arraydataz = data.result[2]
		var datax = arraydatax.x;
		var datay = arraydatay.y;
        var dataz = arraydataz.z;
        document.getElementById("x").innerHTML = datax;
        document.getElementById("y").innerHTML = datay;
        document.getElementById("z").innerHTML = dataz;
		nilai(datax,datay);
        
	})
	
}

function workspace(){
//------------------------------koordinat x dan y-------------------//
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.font = "12px arial";
	ctx.fillText("250",acuanX + 5,165);

	ctx.fillRect(acuanX - 6,acuanY - 240,12,2);	
	ctx.clearRect(tempx + 2,tempy + 3,1,1);
	ctx.moveTo(acuanX,acuanY);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(acuanX, acuanY, 150, Math.PI, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(acuanX, acuanY, 100, Math.PI, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(acuanX - 200,acuanY);
	ctx.lineTo(acuanX + 200,acuanY);
	ctx.stroke();

	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(acuanX,acuanY);
	ctx.lineTo(acuanX,20);
	ctx.stroke();

//------------------------------koordinat z-------------------//

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
	ctx.moveTo(acuanX,acuanY);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();
}

function nilai(inputx, inputy){
	tempx = acuanX + parseFloat(inputx);
	tempy = acuanY + 10 - parseFloat(inputy);
	
	workspace();
	
	ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(acuanX,acuanY);
	titikbulat(tempx,tempy);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();
}