<?php

	// Connect
	require 'connect.php';

	// Background
	require 'backgroundUse.php';

	// Require month library
	require '../assets/month/month.php';

	// Query and generate
	$query = "SELECT * FROM materiale ORDER BY date DESC";
	$result = mysqli_query($conn, $query);
	$i = 0;
	while ($row = mysqli_fetch_array($result)){
		$i++;
		$date = $row['date'];
		$day = date("d",strtotime($date));
		$month = date("m",strtotime($date));
		$year = date("y",strtotime($date));
		$id = $row['id'];
		$tip = $row['tip'];
		$link = '';
		if ($tip == 'Lectie'){
			$link = 'lectie.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
		}
		else if ($tip == 'Test'){
			$link = 'test.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
		}
		else if ($tip == 'Problema'){
			$link = 'problema.html';
			$data = array('id'=>$id);
			$link = $link . "?". http_build_query($data);
		}

		// Disable links on Infoeducatia test
		if (($id==000003)||($id==000004)){
			$link = "#";
		}

		// Continue generating
		echo "<a href='" .  $link . "'>";
		echo "<li>";
		echo "<div class='material-grid'>";
		if ($used==0){
			echo "<img src='http://unsplash.it/700/700?random=" . $i . "' class='image'>";
		}
		else{
			echo "<div class='image-container'><div class='image-pattern' style='background: url(assets/randomSubtle/randomSubtle.php?random=". $i . ");'></div></div>";
		}
		echo "<div class='hover'></div>";
		echo "<div class='date'>";
		echo "<p class='day'>" . $day . "</p>";
		echo "<p class='month'>" . month_beautifier_return($month) . $year . "</p>";
		echo "</div>";
		echo "<h3 class='title'>" . $row['title'] . "</h3>";
		echo "<p>" . $row['description'] . "</p>";
		echo "<ul class='details'>";
		echo "<li class='views'><i class='fa fa-eye'></i>" . $row['views'] . "</li>";
		echo "<li class='likes'><i class='fa fa-heartbeat'></i>" . $row['likes'] . "</li>";
		echo "<li class='tip'><i class='fa fa-book'></i>" . $row['tip'] . "</li>";
		echo "</ul>";
		echo "</div>";
		echo "</li>";
		echo "</a>";
	}

	// Disconnect
	mysqli_close($conn);

?>
