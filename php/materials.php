<?php

	// Generate materiale.html page
	require 'connect.php';
	require 'month.php';
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

		// Disable links on Infoeducatia test
		if (($id==000003)||($id==000004)){
			$link = "#"; 
		}

		// Continue generating
		echo "<a href='" .  $link . "'>";
		echo "<li>";
		echo "<div class='material-grid'>";
		// echo "<img src='http://unsplash.it/700/700?random=" . $i . "' class='image'>";
		echo "<img src='https://source.unsplash.com/random/700x700?image=" . $i . "' class='image'>";
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
	mysqli_close($conn);
	
?>