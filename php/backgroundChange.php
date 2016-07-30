<?php

	// Connect
	require 'connect.php';

	// Background
	require 'backgroundUse.php';

	// Page header
	if ($used==0){
		$query = "UPDATE background SET type='1'";
		$result = mysqli_query($conn, $query);
		echo "Subtle pattern";
	}
	else{
		$query = "UPDATE background SET type='0'";
		$result = mysqli_query($conn, $query);
		echo "Unsplash";
	}

	// Disconnect
	mysqli_close($conn);
	
?>