<?php

	// Connect
	require 'connect.php';

	// GET data
	$region = $_GET["region"];
	$country = $_GET["country"];

	// Query
	$query = "UPDATE judet SET number=number+1 WHERE location='$region'";
	$result = mysqli_query($conn, $query);

	// Country
	$query = "UPDATE tari SET number=number+1 WHERE code='$country'";
	$result = mysqli_query($conn, $query);

	// Disconnect
	mysqli_close($conn);

?>
