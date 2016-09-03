<?php

	// Connect
	require 'connect.php';

    // Create export array
    $export = Array();

	// Arrays "judet"
	$query = "SELECT name, number FROM judet ORDER BY name";
    $result = mysqli_query($conn, $query);
    $names = Array();
	$numbers = Array();
    while ($row = mysqli_fetch_assoc($result)){
        $names[] =  $row['name'];
		$numbers[] =  $row['number'];
    }

	// Arrays "tari"
	$query = "SELECT name, number FROM tari ORDER BY name";
    $result = mysqli_query($conn, $query);
    $namesCountry = Array();
	$numbersCountry = Array();
    while ($row = mysqli_fetch_assoc($result)){
        $namesCountry[] =  $row['name'];
		$numbersCountry[] =  $row['number'];
    }

    // Export
	$export[0] = json_encode($names);
	$export[1] = json_encode($numbers);
	$export[2] = json_encode($namesCountry);
	$export[3] = json_encode($numbersCountry);
    echo json_encode($export);

	// Disconnect
	mysqli_close($conn);

?>
