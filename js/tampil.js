var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;
var tempx = 0;
var tempy = 0;
var weblink = 'http://192.168.43.82/webPA/tampil.php';
var acuanX= 300;
var acuanY= 400;
var base = new Image();
var arrayX = [];
var arrayY = [];
var arrayZ = [];
base.src = './BASE.png';

var image = new Image();
image.src = './JOINT1.png';

$(document).ready(
	function() {
        selesai();
	}
);
 
function selesai() {
	setTimeout(function() {
		update();
        selesai();
    }, 500);
}



function sort(dx,dy,dz){

    arrayX.push(parseFloat(dx));
    arrayY.push(parseFloat(dy));
    arrayZ.push(parseFloat(dz));
    
    if(arrayX.length == 2 && arrayY.length == 2 && arrayZ.length == 2 ){
        
        var nilaix1 = arrayX[0];
        var nilaiy1 = arrayY[0];
        var nilaiz1 = arrayZ[0];
        
        var nilaix2 = arrayX[1];
        var nilaiy2 = arrayY[1];
        var nilaiz2 = arrayZ[1];
        
        if(nilaix1 != nilaix2 && nilaiy1 != nilaiy2 && nilaiz1 != nilaiz2){
        
            var xx = nilaix2 - nilaix1;
            var yy = nilaiy2 - nilaiy1;
            var xxx = xx / 100;
            var yyy = yy / 100;
            var counter = 0;
            var i = setInterval(function(){
                console.log("hi")
                nilaix1 = nilaix1 + xxx;
                nilaiy1 = nilaiy1 + yyy;
                nilai(nilaix1,nilaiy1);
                counter++;
                console.log(counter)
                if(counter === 50) {
                    clearInterval(i);
                }
            }, 10);
            arrayX.length=0;
            arrayY.length=0;
            arrayZ.length=0;
            }
        else{
            nilai(arrayX[1],arrayY[1]);   
            arrayX.length=0;
            arrayY.length=0;
            arrayZ.length=0;

        };
    }
    
    else{
        var a
        // console.log(arrayX.length);
    }
//    console.log(arrayX.length)

}

function update() {
	$.getJSON(weblink, function(data) {
		var arraydatax = data.result[0];
		var arraydatay = data.result[1];
        var arraydataz = data.result[2]
        var arraydatav = data.result[3]
        
        var datax = arraydatax.x;
		var datay = arraydatay.y;
        var dataz = arraydataz.z;        
        var datav = arraydatav.v;     
        
        sort(datax, datay, datax);
        
        document.getElementById("x").innerHTML = datax;
        document.getElementById("y").innerHTML = datay;
        document.getElementById("z").innerHTML = dataz;
        if(datav == 1){
            document.getElementById("v").innerHTML = 'ON';}
        else if(datav == 0){
            document.getElementById("v").innerHTML = 'OFF';}
//		nilai(datax,datay);
        
	})
	
}

function workspace(){
//------------------------------koordinat x dan y-------------------//
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.font = "12px arial";
	ctx.fillText("250",acuanX + 5,165);
	ctx.fillRect(acuanX - 6,acuanY - 240,12,2);	
	ctx.clearRect(tempx + 2,tempy + 3,1,1);
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
	tempx = acuanX - parseFloat(inputx);
	tempy = acuanY + 10 - parseFloat(inputy);
	
    floatx = 0 - parseFloat(inputx)
    floaty = parseFloat(inputy)
    
//    console.log("nilai")
//    console.log(floaty)
    workspace();
    
	draw(ctx, image, floatx, floaty);
    
    titikbulat(tempx,tempy);

    ctx.beginPath(); // mulai menggmabar
	ctx.moveTo(acuanX,acuanY);
	ctx.lineTo(tempx,tempy);
	ctx.stroke();

}

function drawRotatedImage(ctx, image, x, y, width, height, rotation){
    
      var halfWidth  = width  / 2;
      var halfHeight = height / 2;
      ctx.save();
      ctx.translate(x + halfWidth, y + halfHeight);
      ctx.rotate(rotation);
      ctx.drawImage(image, -halfWidth, -halfHeight, width, height);
      ctx.restore();
    }

function draw(ctx, image, koorx, koory){
      if (!image.complete){
        setTimeout(function(){
          draw(ctx, image);
        }, 50);
        return;
      }
      var basex = 158;
      var basey = 158;
      ctx.drawImage(base, acuanX-79, acuanY-79, basex, basey);      
      drawRotatedImage(ctx, image, acuanX-94.5, acuanY-70, 189, 140, Math.atan (koorx/koory));
    }
    
    