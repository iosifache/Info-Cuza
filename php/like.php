<?php
	require 'connect.php';
	$id = $_GET["id"];
	$query = "UPDATE materiale SET likes=likes+1 WHERE id='$id'";
	$result = mysqli_query($conn, $query);
?>