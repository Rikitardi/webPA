<?php
header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Credentials: true" );
header( "Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS" );
include("config/config.php");

$sql = mysqli_query($connect,"SELECT koor_x, koor_y, koor_z, koor_r FROM koordinat");
$result = array();
 
while($row = mysqli_fetch_array($sql)){
	array_push($result, array('x' => $row["koor_x"]), array('y' => $row["koor_y"]), array('z' => $row["koor_z"]), array('v' => $row["koor_r"]));
	//echo $row["koor_y"]."</br>";
}
echo json_encode(array("result" => $result));
?>