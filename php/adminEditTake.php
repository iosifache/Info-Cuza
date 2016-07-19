<?php
	require 'connect.php';
	require 'showErrors.php';
	$id = $_GET["id"];
	$query = "SELECT * FROM materiale WHERE id='$id' LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	$export = array();
	array_push($export, $row['date']);
	array_push($export, $row['tip']);
	array_push($export, $row['title']);
	array_push($export, $row['description']);
	array_push($export, $row['views']);
	array_push($export, $row['likes']);
	array_push($export, $row['tip']);
	if ($export[6]=="Lectie"){
		
	}
	if ($export[6]=="Test"){
		
	}
	mysqli_close($conn);
?>