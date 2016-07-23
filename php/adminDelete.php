<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];
	$tip = $_GET["tip"];

	// Query
	$query = "DELETE FROM materiale WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	echo var_dump($result);
	if ($tip=='Lectie'){
		$query = "DELETE FROM lectii WHERE id='$id'";
	} 
	else if ($tip=='Test'){
		$query = "DELETE FROM teste WHERE id='$id'";
	}
	$result = mysqli_query($conn, $query);
	echo var_dump($result);

	// Disconnect
	mysqli_close($conn);
	
?>