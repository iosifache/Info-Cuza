<?php

	// Connect
	require 'connect.php';

	// GET data
	$email = $_GET["email"];
	$password = $_GET["password"];

	// Verify if email is valid and password contain only letters and numbers
	if ((!filter_var($email, FILTER_VALIDATE_EMAIL)===false)&&(ctype_alnum($_GET["password"]))){

		// Password hashing
		$options = [
			'cost' => 12,
		];
		$hash = password_hash($password, PASSWORD_BCRYPT, $options);

		// Query
		$query = "INSERT INTO admin VALUES ('$email', '$hash')";
		$result = mysqli_query($conn, $query);
		
	}
	else{
		if ((filter_var($email, FILTER_VALIDATE_EMAIL)===false)&&(!ctype_alnum($_GET["password"]))){
			echo "2";
		}
		else if (filter_var($email, FILTER_VALIDATE_EMAIL)===false){
			echo "0";
		}
		else if (!ctype_alnum($_GET["password"])){
			echo "1";
		}
	}

	// Disconnect
	mysqli_close($conn);

?>