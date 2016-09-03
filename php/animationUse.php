<?php

	// Check if admin use animation
	$query = "SELECT * FROM animation LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	$used = $row[0];

?>
