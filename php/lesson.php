<?php

	// Connect
	require 'connect.php';

	// Require month library
	require '../assets/month/month.php';

	// GET data
	$id = (int)$_GET["id"];
	if (ctype_alpha($_GET["lang"])){
		$lang = $_GET["lang"];
	}
	else{
		$lang= "";
	}

	// Increase views
	$query = "UPDATE materiale SET views=views+1 WHERE id='$id'";
	$result = mysqli_query($conn, $query);

	// Page header
	$query = "SELECT * FROM materiale WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	$export = array();
	while ($row = mysqli_fetch_array($result)){
		$date = $row['date'];
		$day = date("d",strtotime($date));
		$month = date("m",strtotime($date));
		echo "<div class='lesson-grid'>";
		echo "<div class='intro'>";
		echo "<img src='http://unsplash.it/1800/400?random'>";
		echo "<div class='vertical-center'>";
		echo "<div class='grid'>";
		echo "<h1>" . $row['title'] . "</h3>";
		echo "<p>" . $row['description']  . "</p>";
		echo "<ul>";
		echo "<li id='like'><i class='fa fa-heart'></i> Apreciaza" . $liked . "</li>";
		$link = '';
		if ($lang=="CPP"){
			$link='lectie.html';
			$data = array('id'=>$id, 'lang'=>'PAS');
			$link = $link . "?". http_build_query($data);
			echo "<a href='" . $link . "'><li>Schimba in Pascal</li></a>";
		}
		if ($lang=="PAS"){
			$link='lectie.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
			echo "<a href='" . $link . "'><li>Schimba in C++</li></a>";
		}
		echo "<li id='export-pdf'>Exporta in PDF</li>";
		echo "</ul>";
		echo "<ul>";
		echo "<li>" . $row['tip'] . "</li>";
		echo "<li>" . $lang . "</li>";
		echo "<li>" . $day . " ";
		month_beautifier($month);
		echo "</li>";
		echo "<li>" . $row['views'] . " vizualizari</li>";
		echo "<li>" . $row['likes'] . " aprecieri</li>";
		echo "</ul>";
		echo "</div>";
		echo "</div>";
		echo "</div>";
	}

	// Lesson body
	$query = "SELECT * FROM lectii WHERE id='$id' AND lang='$lang'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo "<div class='grid'>";
		echo "<div class='markdown-body'>";
		echo "<h2 id='intro'>Introducere</h2>";
		echo $row['introducere'];
		echo "<h2 id='section1'>" . $row['nume_sectiune_1'] . "</h2>";
		echo $row['sectiune_1'];
		echo "<h2 id='section2'>" . $row['nume_sectiune_2'] . "</h2>";
		echo $row['sectiune_2'];
		echo "<h2 id='section3'>" . $row['nume_sectiune_3'] . "</h2>";
		echo $row['sectiune_3'];
		echo "<h2 id='section4'>" . $row['nume_sectiune_4'] . "</h2>";
		echo $row['sectiune_4'];
		echo "<h2 id='section5'>" . $row['nume_sectiune_5'] . "</h2>";
		echo $row['sectiune_5'];
		echo "<h2 id='aplicare'>Aplicare practica</h2>";
		echo "<p>" . $row['aplicare'] . "</p>";
		echo "<h2 id='exercitii'>Exercitii propuse</h2>";
		echo $row['exercitii'];
		echo "<h2 id='felicitari'>Felicitari!</h2>";
		echo $row['felicitari'];
		echo "</div>";
		echo "</div>";
		echo "</div>";
		echo "<ul class='scrollspy'>";
		echo "<a href='#intro'><li><div>Descriere</div></li></a>";
		echo "<a href='#section1'><li><div>" . $row['nume_sectiune_1'] . "</div></li></a>";
		echo "<a href='#section2'><li><div>" . $row['nume_sectiune_2'] . "</div></li></a>";
		echo "<a href='#section3'><li><div>" . $row['nume_sectiune_3'] . "</div></li></a>";
		echo "<a href='#section4'><li><div>" . $row['nume_sectiune_4'] . "</div></li></a>";
		echo "<a href='#section5'><li><div>" . $row['nume_sectiune_5'] . "</div></li></a>";
		echo "<a href='#aplicare'><li><div>Aplicare practica</div></li></a>";
		echo "<a href='#exercitii'><li><div>Exercitii propuse</div></li></a>";
		echo "<a href='#felicitari'><li><div>Felicitari!</div></li></a>";
		echo "</ul>";
	}

	// Disconnect
	mysqli_close($conn);

?>