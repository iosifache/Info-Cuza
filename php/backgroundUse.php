<?php

	// Get used type of background
	$query = "SELECT * FROM background LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	$used = $row[0];

?>