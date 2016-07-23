<?php
	
	// Connect
	require 'connect.php';

	// Require month library
	require '../assets/month/month.php';

	// Query
	$query = "SELECT * FROM materiale ORDER BY date DESC";
	$result = mysqli_query($conn, $query);

	// Material list
	echo "<ul class='admin-list'>";
	while ($row = mysqli_fetch_array($result)){
		$i++;
		$date = $row['date'];
		$day = date("d",strtotime($date));
		$month = date("m",strtotime($date));
		$year = date("y",strtotime($date));
		$id = $row['id'];
		$tip = $row['tip'];
		$link = '';
		if ($tip=='Lectie'){
			$link='lectie.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
		} 
		else if ($tip=='Test'){
			$link='test.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
		}
		echo "<li data-id='" . $id . "' data-tip='" . $tip . "'>";
		echo "<a href='" . $link . "'><h3>" . $row['title'] . "</h3></a>";
		echo "<i class='fa fa-bookmark'></i><p>" . $id . "</p>";
		echo "<i class='fa fa-calendar'></i><p>" . $day . month_beautifier_return($month) . $year . "</p>";
		echo "<i class='fa fa-eye'></i><p>" . $row['views'] . "</p>";
		echo "<i class='fa fa-heartbeat'></i><p>" . $row['likes'] . "</p>";
		echo "<i class='fa fa-book'></i><p>" . $row['tip'] . "</p>";
		echo "<div class='tools'><p class='edit'>Editare</p><p class='reset'>Resetare contoare</p><p class='delete'>Sterge</p></div>";
		echo "</li>";
	}
	echo "</ul>";

	// Disconnect
	mysqli_close($conn);
?>