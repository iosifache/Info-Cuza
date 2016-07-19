<?php
	require 'connect.php';
	require 'month.php';
	$id = $_GET["id"];
	$query = "UPDATE materiale SET views=0 WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	$query = "UPDATE materiale SET likes=0 WHERE id='$id'";
	$result = mysqli_query($conn, $query);
?>