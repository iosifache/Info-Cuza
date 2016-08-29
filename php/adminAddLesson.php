<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];
	$lang = $_GET["lang"];
	$date = $_GET["date"];
	$title = $_GET["title"];
	$description = $_GET["description"];
	$tip = $_GET["tip"];
	$nume_sectiune_1 = $_GET["nume_sectiune_1"];
	$nume_sectiune_2 = $_GET["nume_sectiune_2"];
	$nume_sectiune_3 = $_GET["nume_sectiune_3"];
	$nume_sectiune_4 = $_GET["nume_sectiune_4"];
	$nume_sectiune_5 = $_GET["nume_sectiune_5"];
	$introducere = $_GET["introducere"];
	$sectiune_1 = $_GET["sectiune_1"];
	$sectiune_2 = $_GET["sectiune_2"];
	$sectiune_3 = $_GET["sectiune_3"];
	$sectiune_4 = $_GET["sectiune_4"];
	$sectiune_5 = $_GET["sectiune_5"];
	$aplicare = $_GET["aplicare"];
	$exercitii = $_GET["exercitii"];
	$felicitari = $_GET["felicitari"];

	// Queries
	$query = "INSERT INTO materiale VALUES ('$id', '$date', '$title', '$description', '0', '0', '$tip')";
	$result = mysqli_query($conn, $query);
	$query = "INSERT INTO lectii VALUES ('$id', '$lang', '$nume_sectiune_1', '$nume_sectiune_2', '$nume_sectiune_3', '$nume_sectiune_4', '$nume_sectiune_5', '$introducere', '$sectiune_1', '$sectiune_2', '$sectiune_3', '$sectiune_4', '$sectiune_5', '$aplicare', '$exercitii', '$felicitari')";
	$result = mysqli_query($conn, $query);

	// Disconnect
	mysqli_close($conn);

?>