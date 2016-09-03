<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];
	$date = $_GET["date"];
	$title = $_GET["title"];
	$description = $_GET["description"];
	$tip = $_GET["tip"];
	$lang = $_GET["lang"];
	$intrebare_1 = $_GET["intrebare_1"];
	$raspuns_1_intrebare_1 = $_GET["raspuns_1_intrebare_1"];
	$raspuns_2_intrebare_1 = $_GET["raspuns_2_intrebare_1"];
	$raspuns_3_intrebare_1 = $_GET["raspuns_3_intrebare_1"];
	$raspuns_1_un = array($raspuns_1_intrebare_1, $raspuns_2_intrebare_1, $raspuns_3_intrebare_1);
	$raspuns_1 = serialize($raspuns_1_un);
	$intrebare_2 = $_GET["intrebare_2"];
	$raspuns_1_intrebare_2 = $_GET["raspuns_1_intrebare_2"];
	$raspuns_2_intrebare_2 = $_GET["raspuns_2_intrebare_2"];
	$raspuns_3_intrebare_2 = $_GET["raspuns_3_intrebare_2"];
	$raspuns_2_un = array($raspuns_1_intrebare_2, $raspuns_2_intrebare_2, $raspuns_3_intrebare_2);
	$raspuns_2 = serialize($raspuns_2_un);
	$intrebare_3 = $_GET["intrebare_3"];
	$raspuns_1_intrebare_3 = $_GET["raspuns_1_intrebare_3"];
	$raspuns_2_intrebare_3 = $_GET["raspuns_2_intrebare_3"];
	$raspuns_3_intrebare_3 = $_GET["raspuns_3_intrebare_3"];
	$raspuns_3_un = array($raspuns_1_intrebare_3, $raspuns_2_intrebare_3, $raspuns_3_intrebare_3);
	$raspuns_3 = serialize($raspuns_1_un);
	$intrebare_4 = $_GET["intrebare_4"];
	$raspuns_1_intrebare_4 = $_GET["raspuns_1_intrebare_4"];
	$raspuns_2_intrebare_4 = $_GET["raspuns_2_intrebare_4"];
	$raspuns_3_intrebare_4 = $_GET["raspuns_3_intrebare_4"];
	$raspuns_4_un = array($raspuns_1_intrebare_4, $raspuns_2_intrebare_4, $raspuns_3_intrebare_4);
	$raspuns_4 = serialize($raspuns_4_un);
	$intrebare_5 = $_GET["intrebare_5"];
	$raspuns_1_intrebare_5 = $_GET["raspuns_1_intrebare_5"];
	$raspuns_2_intrebare_5 = $_GET["raspuns_2_intrebare_5"];
	$raspuns_3_intrebare_5 = $_GET["raspuns_3_intrebare_5"];
	$raspuns_5_un = array($raspuns_1_intrebare_5, $raspuns_2_intrebare_5, $raspuns_3_intrebare_5);
	$raspuns_5 = serialize($raspuns_5_un);
	$output_1 = $_GET["output_1"];
	$code_output_1 = $_GET["code_output_1"];
	$output_2 = $_GET["output_2"];
	$code_output_2 = $_GET["code_output_2"];
	$output_3 = $_GET["output_3"];
	$code_output_3 = $_GET["code_output_3"];
	$drag_enunt = $_GET["drag"];
	$drag_code = $_GET["code_drag"];
	$drag_var = $_GET["code_var"];
	$correct = json_encode($_GET["correct"]);

	// Query
	$query = "INSERT INTO materiale VALUES ('$id', '$date', '$title', '$description', '0', '0', '$tip')";
	$result = mysqli_query($conn, $query);
	$query = "INSERT INTO teste VALUES ('$id', '$lang', '$intrebare_1', '$raspuns_1', '$intrebare_2', '$raspuns_2', '$intrebare_3', '$raspuns_3', '$intrebare_4', '$raspuns_4', '$intrebare_5', '$raspuns_5', '$output_1', '$code_output_1', '$output_2', '$code_output_2', '$output_3', '$code_output_3', '$drag_enunt', '$drag_code', '$drag_var', '$correct')";
	$result = mysqli_query($conn, $query);

	// Disconnect
	mysqli_close($conn);

?>
