<?php

	// Connect
	require 'connect.php';

	// Query
	$query = "SELECT MAX(id) FROM materiale LIMIT 1;";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);

	// Export
	$max = $row[0] + 1;
	echo sprintf("%06d", $max);

	// Disconnect
	mysqli_close($conn);

?>
