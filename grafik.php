<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
	<title>Tutorial Canvas</title>

</head>
<body>
	<canvas id="myCanvas" width="640" height="300" style="border: 1px solid #000000;"></canvas>
	<p><button onclick="nilai()">Masukan angka</button></p> 
	<label>koordinat x: </label>
	<input type="text" name="kx" id = "koorx" value = "0"></br>
	<label>koordinat y: </label>
	<input type="text" name="ky" id = "koory" value = "0">
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var x = 0;
		var y = 0;
		var tempx = 0;
		var tempy = 0;
        //id = animasi();
		//garisx()
		//workspace();
		//auto_id = auto();
		//titikbulat(300, 200);
        nilai()
        //experiment()
        function experiment(){
            ctx.fillRect(10,10,0.4,0.4)
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
            ctx.moveTo(300,200);
            ctx.lineTo(tempx,tempy);

            ctx.stroke();
		}
        function workspace(){
            ctx.clearRect(0,0, canvas.width, canvas.height);

			ctx.beginPath();
			ctx.arc(300, 200, 150, Math.PI, 2*Math.PI);
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(300, 200, 100, Math.PI, 2*Math.PI);
			ctx.stroke();

            ctx.beginPath(); // mulai menggmabar
            ctx.moveTo(100,200);
            ctx.lineTo(500,200);
            ctx.stroke();

            ctx.beginPath(); // mulai menggmabar
            ctx.moveTo(300,200);
            ctx.lineTo(300,20);
            ctx.stroke();

        }
		function nilai(){
			var inputx = document.getElementById("koorx").value;
			var inputy = document.getElementById("koory").value;
			tempx = 300 + parseFloat(inputx);
			tempy = 200 - parseFloat(inputy);
			console.log(tempx);
			console.log(tempy);
			
            workspace();
            
            ctx.beginPath(); // mulai menggmabar
            ctx.moveTo(300,200);
			titikbulat(tempx,tempy);
            ctx.lineTo(tempx,tempy);
            ctx.stroke();
		}	
		function garisx(){
			
            ctx.beginPath(); // mulai menggmabar
            ctx.moveTo(10,100);
            ctx.lineTo(100,100);
            ctx.stroke();
		}
		function animasi(){
            if(x == 50 && y == 50){
                clearTimeout(id)}
            else{
                ctx.clearRect(0,0, canvas.width, canvas.height);
                ctx.fillRect(x,y,5,5);
                x+=2;
                y+=2;		
                setTimeout(animasi, 100);
                }
		}
		function auto(){
			if(x == 50 && y == 50){
				clearTimeout(auto_id);
			}
			else{
				tempx = 300 + x;
				tempy = 200 - y;
                workspace();
				titikbulat(tempx,tempy);
				x+=1;
				y+=1;
				setTimeout(auto, 100)
			}
		}
	</script>
</body>
</html>