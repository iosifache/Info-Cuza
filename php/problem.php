<?php

	// Connect
	require 'connect.php';

	// Get used type of background
	$query = "SELECT * FROM background LIMIT 1";
	$result = mysqli_query($conn, $query);
	$row = mysqli_fetch_array($result);
	$used = $row[0];

	// Require month library
	require '../assets/month/month.php';

	// GET data
	$id = (int)$_GET["id"];

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
		echo "<div class='lesson-grid wow fadeIn' data-wow-delay='2s' data-wow-duration='0.3s'>";
		echo "<div class='intro'>";
		if ($used==0){
			echo "<img src='http://unsplash.it/1800/400?random'>";
			echo "<div class='vertical-center'>";
			echo "<div class='grid'>";
		}
		else{
			$backgroundJSON = file_get_contents('http://localhost/InfoCuza/assets/randomSubtle/randomSubtleTuples.php');
			$background = json_decode($backgroundJSON);
			$backgroundUsed = $background[0];
			$backgroundLocation = $background[1];
			echo "<div class='image-container'><div class='image-pattern' style='background: url(" . $backgroundUsed . ");'></div></div>";
			if ($backgroundLocation == "Light"){
				$color = 1;
			}
			else if ($backgroundLocation == "Dark"){
				$color = 0;
			}
			echo "<div class='vertical-center'>";
			if ($color == 0){
				echo "<div class='grid white'>";
			}
			else if ($color == 1){
				echo "<div class='grid black'>";
			}
		}
		echo "<h1>" . $row['title'] . "</h3>";
		echo "<p>" . $row['description']  . "</p>";
		echo "<ul>";
		echo "<li id='like'><i class='fa fa-heart'></i> Apreciaza</li>";
		echo "</ul>";
		echo "<ul>";
		echo "<li>" . $row['tip'] . "</li>";
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
	$query = "SELECT * FROM probleme WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo "<div class='grid'>";
		echo "<div class='markdown-body'>";
		echo "<h2 id='descriereProblema'>Descriere problema</h2>";
		echo $row['descriereProblema'];
		echo "<h2 id='descriereInput'>Date de intare</h2>";
		echo $row['descriereInput'];
		echo "<h2 id='descriereOutput'>Date de iesire</h2>";
		echo $row['descriereOutput'];
		echo "<h2 id='precizari'>Precizari</h2>";
		echo $row['precizari'];
		echo "<h2 id='compiler'>Compiler</h2>";
		echo "</div>";
		echo "</div>";
		echo "<ul class='scrollspy'>";
		echo "<a href='#descriereProblema'><li><div>Descriere</div></li></a>";
		echo "<a href='#descriereInput'><li><div>Date de intrare</div></li></a>";
		echo "<a href='#descriereOutput'><li><div>Date de iesire</div></li></a>";
		echo "<a href='#precizari'><li><div>Precizari</div></li></a>";
		echo "<a href='#compiler'><li><div>Compilator</div></li></a>";
		echo "</ul>";
	}

	// Disconnect
	mysqli_close($conn);

?>
