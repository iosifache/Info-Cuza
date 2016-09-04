<?php

	// Connect
	require 'connect.php';

	// Export array in which are data introduced
	$export = array();

	// Count materiales
	$query = "SELECT COUNT(id) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Count lesson
	$query = "SELECT COUNT(date) FROM materiale WHERE tip='Lectie' LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Count tests
	$query = "SELECT COUNT(date) FROM materiale WHERE tip='Test' LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get max ID
	$query = "SELECT MAX(id) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, sprintf("%06d", $row[0]));

	// Get min views
	$query = "SELECT MIN(views) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get max views
	$query = "SELECT MAX(views) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get min likes
	$query = "SELECT MIN(likes) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get min likes
	$query = "SELECT MAX(likes) FROM materiale LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get oldest post
	$query = "SELECT date FROM materiale ORDER BY date LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Count admins
	$query = "SELECT COUNT(user) FROM admin LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Get newest post
	$query = "SELECT date FROM materiale ORDER BY date DESC LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Count tests
	$query = "SELECT COUNT(date) FROM materiale WHERE tip='Problema' LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	array_push($export, $row[0]);

	// Export
	echo json_encode($export);

	// Disconnect
	mysqli_close($conn);

?>
