<?php

	// Connect
	require 'connect.php';

	// Animation
	require 'animationUse.php';

	// Export
	if ($used==0){
		echo "0";
	}
	else if ($used==1){
		echo "1";
	}

	// Disconnect
	mysqli_close($conn);
	
?>