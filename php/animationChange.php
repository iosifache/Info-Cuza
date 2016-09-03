<?php

	// Connect
	require 'connect.php';

	// Background
	require 'animationUse.php';

	// Page header
	if ($used==0){
		$query = "UPDATE animation SET type='1'";
		$result = mysqli_query($conn, $query);
		echo "Activate";
	}
	else{
		$query = "UPDATE animation SET type='0'";
		$result = mysqli_query($conn, $query);
		echo "Dezactivate";
	}

	// Disconnect
	mysqli_close($conn);

?>
