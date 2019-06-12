<?php 
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
//		for ($i=0; $i < 300; $i++) {
//			$nilai_x += $temp_x;
//			$nilai_y += $temp_y;
//			if($koorx == True and $koory == True and $koorz== True and $koorr == True ){
//				mysqli_query($connect, "UPDATE koordinat SET koor_x = $nilai_x, koor_y = $nilai_y, koor_z = $z, koor_r = $r WHERE id = 1 ");
//			sleep(0.1);
//			echo $nilai_x."</br>";
//			echo $nilai_y."</br>";
//			}
//		}
	}
	//header("location:dummy.php");
?>