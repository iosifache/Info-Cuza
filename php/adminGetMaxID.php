<?php
	require 'connect.php';
	$query = "SELECT MAX(id) FROM materiale LIMIT 1;";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	$next_id = $row[0] + 1;
	echo $next_id;
	mysqli_close($conn);
?>