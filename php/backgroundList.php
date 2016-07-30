<?php

	// Connect
	require 'connect.php';

	// Background
	require 'backgroundUse.php';

	// Page header
	if ($used==0){
		echo "Unspash";
	}
	else{
		echo "Subtle pattern";
	}

	// Disconnect
	mysqli_close($conn);
	
?>