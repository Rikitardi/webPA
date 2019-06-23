<?php 
header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Credentials: true" );
header( "Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS" );
include_once("config/config.php");
	
	$koorx = isset($_GET['x']) ? true:false;
	$koory = isset($_GET['y']) ? true:false;
	$koorz = isset($_GET['z']) ? true:false;
	$koorv = isset($_GET['v']) ? true:false;

	$nilai_x = 0;
	$nilai_y = 0;

	if ($koorx and $koory and $koorz and $koorv ) {

		$x = $_GET['x'];
		$y = $_GET['y'];
		$z = $_GET['z'];
		$v = $_GET['v'];
		
		if($koorx and $koory and $koorz and $koorv ){
			mysqli_query($connect, "UPDATE koordinat SET koor_x = $x, koor_y = $y, koor_z = $z, koor_r = $v WHERE id = 1 ");
			echo($v."</br>");
		}
	}
?>