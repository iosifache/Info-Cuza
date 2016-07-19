<?php
	require 'connect.php';
	$user = $_GET["user"];
	$password = $_GET["password"];
	$query = "SELECT * FROM admin WHERE user='$user'";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
    $count = mysqli_num_rows($result);
    if ($count==0){
    	echo "0";
    }
    else if($count==1){
    	$hash = $row['password'];
    	if (password_verify($password, $hash)){
    		echo "1";
    	}
    	else{
    		echo "2";
    	}
    }	
?>