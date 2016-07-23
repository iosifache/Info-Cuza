<?php
	
	require 'connect.php';

	// GET data
	$id = $_GET["id"];

	// Query
	$query = "SELECT * FROM materiale WHERE id='$id' LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);

	// Print header data
	echo '<p class="label">ID</p>';
	echo '<input type="text" autocomplete="off" spellcheck="false" id="id" class="no-event" value="' . $id . '">';
	echo '<p class="label">Data</p>';
	echo '<input type="text" autocomplete="off" spellcheck="false" id="date" placeholder="AAAA-LL-ZZ" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])" value="' . $row['date'] . '">';
	echo '<p class="label">Titlu</p>';
	echo '<input type="text" autocomplete="off" spellcheck="false" id="title" value="' . $row['title'] . '">';
	echo '<p class="label">Descriere</p>';
	echo '<input type="text" autocomplete="off" spellcheck="false" id="description" value="' .  $row['description'] . '">';
	echo '<p class="label">Tip</p>';
	echo '<input type="text" autocomplete="off" spellcheck="false" id="tip" placeholder="Lectie/ Test" class="no-event" pattern="[Ll]ectie|[Tt]est" value="' . $row['tip'] . '">';

	// IF material is LESSON
	if ($row['tip']=="Lectie"){

		// Get data from "Lectii" database
		$query = "SELECT * FROM lectii WHERE id='$id' AND lang='CPP' LIMIT 1";
		$result = mysqli_query($conn, $query);
		$num_rows_CPP = mysqli_num_rows($result);
		$row_CPP = mysqli_fetch_array($result);
		$query = "SELECT * FROM lectii WHERE id='$id' AND lang='PAS' LIMIT 1";
		$result = mysqli_query($conn, $query);
		$num_rows_PAS = mysqli_num_rows($result);
		$row_PAS = mysqli_fetch_array($result);

		// Verify if there is CPP version
		if ($num_rows_CPP == 1){
			echo '<p class="label">Limbaj de programare</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="lang_CPP" class="no-event" value="' . $row_CPP['lang'] . '"></input>';
			echo '<p class="label">Introducere</p>';
			echo '<textarea id="introducere_CPP">' . $row_CPP['introducere'] . '</textarea>';
			echo '<p class="label">Nume sectiune #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_1_CPP" value="' . $row_CPP['nume_sectiune_1'] . '">';
			echo '<p class="label">Nume sectiune #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_2_CPP" value="' . $row_CPP['nume_sectiune_2'] . '">';
			echo '<p class="label">Nume sectiune #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_3_CPP" value="' . $row_CPP['nume_sectiune_3'] . '">';
			echo '<p class="label">Nume sectiune #4</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_4_CPP" value="' . $row_CPP['nume_sectiune_4'] . '">';
			echo '<p class="label">Nume sectiune #5</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_5_CPP" value="' . $row_CPP['nume_sectiune_5'] . '">';
			echo '<p class="label">Sectiune #1</p>';
			echo '<textarea id="sectiune_1_CPP">' . $row_CPP['sectiune_1'] . '</textarea>';
			echo '<p class="label">Sectiune #2</p>';
			echo '<textarea id="sectiune_2_CPP">' . $row_CPP['sectiune_2'] . '</textarea>';
			echo '<p class="label">Sectiune #3</p>';
			echo '<textarea id="sectiune_3_CPP">' . $row_CPP['sectiune_3'] . '</textarea>';
			echo '<p class="label">Sectiune #4</p>';
			echo '<textarea id="sectiune_4_CPP">' . $row_CPP['sectiune_4'] . '</textarea>';
			echo '<p class="label">Sectiune #5</p>';
			echo '<textarea id="sectiune_5_CPP">' . $row_CPP['sectiune_5'] . '</textarea>';
			echo '<p class="label">Aplicare</p>';
			echo '<textarea id="aplicare_CPP">' . $row_CPP['aplicare'] . '</textarea>';
			echo '<p class="label">Exercitii</p>';
			echo '<textarea id="exercitii_CPP">' . $row_CPP['exercitii'] . '</textarea>';
			echo '<p class="label">Felicitari</p>';
			echo '<textarea id="felicitari_CPP">' . $row_CPP['felicitari'] . '</textarea>';
			echo '<button class="admin-button" id="update-lectie-CPP">Update</button>';
		}

		// Verify if there is PAS version
		if ($num_rows_PAS == 1){
			echo '<p class="label">Limbaj de programare</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="lang_PAS" class="no-event" value="' . $row_PAS['lang'] . '"></input>';
			echo '<p class="label">Introducere</p>';
			echo '<textarea id="introducere_PAS">' . $row_PAS['introducere'] . '</textarea>';
			echo '<p class="label">Nume sectiune #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_1_PAS" value="' . $row_PAS['nume_sectiune_1'] . '">';
			echo '<p class="label">Nume sectiune #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_2_PAS" value="' . $row_PAS['nume_sectiune_2'] . '">';
			echo '<p class="label">Nume sectiune #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_3_PAS" value="' . $row_PAS['nume_sectiune_3'] . '">';
			echo '<p class="label">Nume sectiune #4</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_4_PAS" value="' . $row_PAS['nume_sectiune_4'] . '">';
			echo '<p class="label">Nume sectiune #5</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="nume_sectiune_5_PAS" value="' . $row_PAS['nume_sectiune_5'] . '">';
			echo '<p class="label">Sectiune #1</p>';
			echo '<textarea id="sectiune_1_PAS">' . $row_PAS['sectiune_1'] . '</textarea>';
			echo '<p class="label">Sectiune #2</p>';
			echo '<textarea id="sectiune_2_PAS">' . $row_PAS['sectiune_2'] . '</textarea>';
			echo '<p class="label">Sectiune #3</p>';
			echo '<textarea id="sectiune_3_PAS">' . $row_PAS['sectiune_3'] . '</textarea>';
			echo '<p class="label">Sectiune #4</p>';
			echo '<textarea id="sectiune_4_PAS">' . $row_PAS['sectiune_4'] . '</textarea>';
			echo '<p class="label">Sectiune #5</p>';
			echo '<textarea id="sectiune_5_PAS">' . $row_PAS['sectiune_5'] . '</textarea>';
			echo '<p class="label">Aplicare</p>';
			echo '<textarea id="aplicare_PAS">' . $row_PAS['aplicare'] . '</textarea>';
			echo '<p class="label">Exercitii</p>';
			echo '<textarea id="exercitii_PAS">' . $row_PAS['exercitii'] . '</textarea>';
			echo '<p class="label">Felicitari</p>';
			echo '<textarea id="felicitari_PAS">' . $row_PAS['felicitari'] . '</textarea>';
			echo '<button class="admin-button" id="update-lectie-PAS">Update</button>';
		}

	}

	// IF material is QUIZ
	if ($row['tip']=="Test"){

		// Get data from "Teste" database
		$query = "SELECT * FROM teste WHERE id='$id' AND lang='CPP' LIMIT 1";
		$result = mysqli_query($conn, $query);
		$num_rows_CPP = mysqli_num_rows($result);
		$row_CPP = mysqli_fetch_array($result);
		$query = "SELECT * FROM teste WHERE id='$id' AND lang='PAS' LIMIT 1";
		$result = mysqli_query($conn, $query);
		$num_rows_PAS = mysqli_num_rows($result);
		$row_PAS = mysqli_fetch_array($result);

		// Verify if there is CPP version
		if ($num_rows_CPP == 1){
			echo '<p class="label">Limbaj de programare</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="lang_CPP" class="no-event" value="' . $row_CPP['lang'] . '"></input>';
			$correct_CPP = json_decode($row_CPP["correct"]);
			$raspuns_CPP_1 = unserialize($row_CPP["raspuns_1"]);
			echo '<p class="label">Intrebare #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_1_CPP" placeholder="Enunt" value="' . $row_CPP["intrebare_1"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_1_CPP" placeholder="Raspuns #1" value="' . $raspuns_CPP_1[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_1_CPP" placeholder="Raspuns #2" value="' . $raspuns_CPP_1[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_1_CPP" placeholder="Raspuns #3" value="' . $raspuns_CPP_1[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_1_CPP" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_CPP[0] . '">';
			$raspuns_CPP_2 = unserialize($row_CPP["raspuns_2"]);
			echo '<p class="label">Intrebare #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_2_CPP" placeholder="Enunt" value="' . $row_CPP["intrebare_2"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_2_CPP" placeholder="Raspuns #1" value="' . $raspuns_CPP_2[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_2_CPP" placeholder="Raspuns #2" value="' . $raspuns_CPP_2[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_2_CPP" placeholder="Raspuns #3" value="' . $raspuns_CPP_2[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_2_CPP" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_CPP[1] . '">';
			$raspuns_CPP_3 = unserialize($row_CPP["raspuns_3"]);
			echo '<p class="label">Intrebare #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_3_CPP" placeholder="Enunt" value="' . $row_CPP["intrebare_3"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_3_CPP" placeholder="Raspuns #1" value="' . $raspuns_CPP_3[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_3_CPP" placeholder="Raspuns #2" value="' . $raspuns_CPP_3[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_3_CPP" placeholder="Raspuns #3" value="' . $raspuns_CPP_3[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_3_CPP" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_CPP[2] . '">';
			$raspuns_CPP_4 = unserialize($row_CPP["raspuns_4"]);
			echo '<p class="label">Intrebare #4</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_4_CPP" placeholder="Enunt" value="' . $row_CPP["intrebare_4"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_4_CPP" placeholder="Raspuns #1" value="' . $raspuns_CPP_3[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_4_CPP" placeholder="Raspuns #2" value="' . $raspuns_CPP_3[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_4_CPP" placeholder="Raspuns #3" value="' . $raspuns_CPP_3[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_4_CPP" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_CPP[3] . '">';
			$raspuns_CPP_5 = unserialize($row_CPP["raspuns_5"]);
			echo '<p class="label">Intrebare #5</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_5_CPP" placeholder="Enunt" value="' . $row_CPP["intrebare_5"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_5_CPP" placeholder="Raspuns #1" value="' . $raspuns_CPP_5[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_5_CPP" placeholder="Raspuns #2" value="' . $raspuns_CPP_5[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_5_CPP" placeholder="Raspuns #3" value="' . $raspuns_CPP_5[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_5_CPP" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_CPP[4] . '">';
			echo '<p class="label">Output #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_1_CPP" placeholder="Enunt" value="' . $row_CPP["output_1"] . '">';
			echo '<textarea id="code_output_1_CPP">' . $row_CPP["code_output_1"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_6_CPP" placeholder="Raspuns corect" value="' . $correct_CPP[5] . '">';
			echo '<p class="label">Output #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_2_CPP" placeholder="Enunt" value="' . $row_CPP["output_2"] . '">';
			echo '<textarea id="code_output_2_CPP">' . $row_CPP["code_output_2"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_7_CPP" placeholder="Raspuns corect" value="' . $correct_CPP[6] . '">';
			echo '<p class="label">Output #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_3_CPP" placeholder="Enunt" value="' . $row_CPP["output_3"] . '">';
			echo '<textarea id="code_output_3_CPP">' . $row_CPP["code_output_3"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_8_CPP" placeholder="Raspuns corect" value="' . $correct_CPP[7] . '">';
			echo '<p class="label">Drag and drop</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="drag_CPP" placeholder="Enunt" value="' . $row_CPP["drag_enunt"] . '">';
			echo '<textarea id="code_drag_CPP">' . $row_CPP['drag_code'] . '</textarea>';
			echo '<textarea id="code_var_CPP">' . $row_CPP['drag_var'] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_9_CPP" placeholder="Raspuns corect #1" value="' . $correct_CPP[8] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_10_CPP" placeholder="Raspuns corect #2" value="' . $correct_CPP[9] . '">';
			echo '<button class="admin-button" id="update-test-CPP">Update</button>';
		}

		// Verify if there is PAS version
		if ($num_rows_PAS == 1){
			echo '<p class="label">Limbaj de programare</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="lang_PAS" class="no-event" value="' . $row_PAS['lang'] . '"></input>';
			$correct_PAS = json_decode($row_PAS["correct"]);
			$raspuns_PAS_1 = unserialize($row_PAS["raspuns_1"]);
			echo '<p class="label">Intrebare #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_1_PAS" placeholder="Enunt" value="' . $row_PAS["intrebare_1"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_1_PAS" placeholder="Raspuns #1" value="' . $raspuns_PAS_1[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_1_PAS" placeholder="Raspuns #2" value="' . $raspuns_PAS_1[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_1_PAS" placeholder="Raspuns #3" value="' . $raspuns_PAS_1[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_1_PAS" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_PAS[0] . '">';
			$raspuns_PAS_2 = unserialize($row_PAS["raspuns_2"]);
			echo '<p class="label">Intrebare #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_2_PAS" placeholder="Enunt" value="' . $row_PAS["intrebare_2"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_2_PAS" placeholder="Raspuns #1" value="' . $raspuns_PAS_2[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_2_PAS_PAS" placeholder="Raspuns #2" value="' . $raspuns_PAS_2[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_2_PAS" placeholder="Raspuns #3" value="' . $raspuns_PAS_2[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_2_PAS" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_PAS[1] . '">';
			$raspuns_PAS_3 = unserialize($row_PAS["raspuns_3"]);
			echo '<p class="label">Intrebare #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_3_PAS" placeholder="Enunt" value="' . $row_PAS["intrebare_3"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_3_PAS" placeholder="Raspuns #1" value="' . $raspuns_PAS_3[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_3_PAS" placeholder="Raspuns #2" value="' . $raspuns_PAS_3[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_3_PAS" placeholder="Raspuns #3" value="' . $raspuns_PAS_3[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_3_PAS" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_PAS[2] . '">';
			$raspuns_PAS_4 = unserialize($row_PAS["raspuns_4"]);
			echo '<p class="label">Intrebare #4</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_4_PAS" placeholder="Enunt" value="' . $row_PAS["intrebare_4"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_4_PAS" placeholder="Raspuns #1" value="' . $raspuns_PAS_3[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_4_PAS" placeholder="Raspuns #2" value="' . $raspuns_PAS_3[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_4_PAS" placeholder="Raspuns #3" value="' . $raspuns_PAS_3[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_4_PAS" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_PAS[3] . '">';
			$raspuns_PAS_5 = unserialize($row_PAS["raspuns_5"]);
			echo '<p class="label">Intrebare #5</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="intrebare_5_PAS" placeholder="Enunt" value="' . $row_PAS["intrebare_5"] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_1_intrebare_5_PAS" placeholder="Raspuns #1" value="' . $raspuns_PAS_5[0] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_2_intrebare_5_PAS" placeholder="Raspuns #2" value="' . $raspuns_PAS_5[1] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="raspuns_3_intrebare_5_PAS" placeholder="Raspuns #3" value="' . $raspuns_PAS_5[2] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_5_PAS" placeholder="Raspuns corect" pattern="1|2|3" value="' . $correct_PAS[4] . '">';
			echo '<p class="label">Output #1</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_1_PAS" placeholder="Enunt" value="' . $row_PAS["output_1"] . '">';
			echo '<textarea id="code_output_1_PAS">' . $row_PAS["code_output_1"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_6_PAS" placeholder="Raspuns corect" value="' . $correct_PAS[5] . '">';
			echo '<p class="label">Output #2</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_2_PAS" placeholder="Enunt" value="' . $row_PAS["output_2"] . '">';
			echo '<textarea id="code_output_2_PAS">' . $row_PAS["code_output_2"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_7" placeholder="Raspuns corect" value="' . $correct_PAS[6] . '">';
			echo '<p class="label">Output #3</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="output_3_PAS" placeholder="Enunt" value="' . $row_PAS["output_3"] . '">';
			echo '<textarea id="code_output_3_PAS">' . $row_PAS["code_output_3"] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_8_PAS" placeholder="Raspuns corect" value="' . $correct_PAS[7] . '">';
			echo '<p class="label">Drag and drop</p>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="drag_PAS" placeholder="Enunt" value="' . $row_PAS["drag_enunt"] . '">';
			echo '<textarea id="code_drag_PAS">' . $row_PAS['drag_code'] . '</textarea>';
			echo '<textarea id="code_var_PAS">' . $row_PAS['drag_var'] . '</textarea>';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_9_PAS" placeholder="Raspuns corect #1" value="' . $correct_PAS[8] . '">';
			echo '<input type="text" autocomplete="off" spellcheck="false" id="corect_10_PAS" placeholder="Raspuns corect #2" value="' . $correct_PAS[9] . '">';
			echo '<button class="admin-button" id="update-test-PAS">Update</button>';
		}
		
	}
	
	// Disconnect
	mysqli_close($conn);

?>