<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];

	// Query
	$query = "UPDATE materiale SET views=0 WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	$query = "UPDATE materiale SET likes=0 WHERE id='$id'";
	$result = mysqli_query($conn, $query);

	// Disconnect
	mysqli_close($conn);

?>
