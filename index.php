	<!DOCTYPE html>
<?php
header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Credentials: true" );
header( "Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS" );
?>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Monitoring Pergerakan Arm-Robot</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="container">
        <div id="header" class="row">
        <h1>Web Monitoring Movement DOBOT</h1>
        </div>
        <div id="menu" class="row">
        <p>menu</p>
        </div>
        <div id="konten"class="row">
            <div id="koordinat" class="col-md-3 text-center">
                <table id="table" class="table table-striped">
                    <thead>
                        <tr>
                            <td>Koordinat</td>
                            <td>Nilai</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td id = "x"></td>
                        </tr>
                        <tr>
                            <td>Y</td>
                            <td id = "y"></td>
                        </tr>
                        <tr>
                            <td>Z</td>
                            <td id = "z"></td>
                        </tr>
                        <tr>
                            <td>Vaccum</td>
                            <td id = "v"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id ="workspace" class="col-md-9 text-center">
                <canvas id="myCanvas" width="700" height="500" ></canvas>
                <script type="text/javascript" src="js/jquery.js"></script>
                <script type="text/javascript" src="js/tampil.js"></script>
        </div>
        </div>
        <div id="footer" class="row">
        <p>A6 2019</p>
        </div>
    </div>
</body>
</html>
