<?php
	require 'connect.php';
	$id = $_GET["id"];
	$tip = $_GET["tip"];
	$query = "DELETE FROM materiale WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	if ($tip=='Lectie'){
		$query = "DELETE FROM lectii WHERE id='$id'";
	} 
	else if ($tip=='Test'){
		$query = "DELETE FROM teste WHERE id='$id'";
	}
	$result = mysqli_query($conn, $query);
	mysqli_close($conn);
?>