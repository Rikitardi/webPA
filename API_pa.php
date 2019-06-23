<?php 
header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Credentials: true" );
header( "Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS" );
include_once("config/config.php");
	
	$koorx = isset($_GET['x']) ? true:false;
	$koory = isset($_GET['y']) ? true:false;
	$koorz = isset($_GET['z']) ? true:false;
	$koorr = isset($_GET['r']) ? true:false;
	$flag  = isset($_GET['f']) ? true:false;
	$nilai_x = 0;
	$nilai_y = 0;
	if ($koorx and $koory and $koorz and $koorr and $flag ) {

		$x = $_GET['x'];
		$y = $_GET['y'];
		$z = $_GET['z'];
		$r = $_GET['r'];
		$f = $_GET['f'];
		
		$temp_x = $x / 300;
		$temp_y = $y / 300;
		echo $temp_x."</br>";
		echo $temp_y."</br>";
		echo $f;
		if($koorx == True and $koory == True and $koorz== True and $koorr == True ){
			mysqli_query($connect, "UPDATE koordinat SET koor_x = $x, koor_y = $y, koor_z = $z, koor_r = $r, flag = $f WHERE id = 1 ");
		}
	}
	echo"data masuk"
?>