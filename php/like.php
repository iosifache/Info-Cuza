<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = (int)$_GET["id"];

	// Query
	$query = "UPDATE materiale SET likes=likes+1 WHERE id='$id'";
	$result = mysqli_query($conn, $query);

	// Disconnect
	mysqli_close($conn);
	
?>