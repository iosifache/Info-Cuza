<?php
	require 'connect.php';
	require 'month.php';
	$id = $_GET["id"];
	$lang = $_GET["lang"];

	// Views
	$query = "UPDATE materiale SET views=views+1 WHERE id='$id'";
	$result = mysqli_query($conn, $query);

	// Generate page header
	$query = "SELECT * FROM materiale WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	$export = array("","");
	while ($row = mysqli_fetch_array($result)){
		$date = $row['date'];
		$day = date("d",strtotime($date));
		$month = date("m",strtotime($date));
		$export[1] = $export[1] . "<div class='lesson-grid'>";
		$export[1] = $export[1] . "<div class='intro'>";
		// $export[1] = $export[1] . "<img src='http://unsplash.it/1800/400?random'>";
		$export[1] = $export[1] . "<img src='https://source.unsplash.com/random/1800x400'>";
		$export[1] = $export[1] . "<div class='vertical-center'>";
		$export[1] = $export[1] . "<div class='grid'>";
		$export[1] = $export[1] . "<h1>" . $row['title'] . "</h3>";
		$export[1] = $export[1] . "<p>" . $row['description']  . "</p>";
		$export[1] = $export[1] . "<ul>";
		$export[1] = $export[1] . "<li id='like'><i class='fa fa-heart'></i> Apreciaza" . $liked . "</li>";
		$link = '';
		if ($lang=="CPP"){
			$link='test.html';
			$data = array('id'=>$id, 'lang'=>'PAS');
			$link = $link . "?". http_build_query($data);
			$export[1] = $export[1] . "<a href='" . $link . "'><li>Schimba in Pascal</li></a>";
		}
		if ($lang=="PAS"){
			$link='test.html';
			$data = array('id'=>$id, 'lang'=>'CPP');
			$link = $link . "?". http_build_query($data);
			$export[1] = $export[1] . "<a href='" . $link . "'><li>Exporta in C++</li></a>";
		}
		$export[1] = $export[1] . "<li id='export-pdf'>Export to PDF</li>";
		$export[1] = $export[1] . "</ul>";
		$export[1] = $export[1] . "<ul>";
		$export[1] = $export[1] . "<li>" . $row['tip'] . "</li>";
		$export[1] = $export[1] . "<li>" . $lang . "</li>";
		$export[1] = $export[1] . "<li>" . $day . " ";
		$export[1] = $export[1] . month_beautifier_return($month);
		$export[1] = $export[1] . "</li>";
		$export[1] = $export[1] . "<li>" . $row['views'] . " vizualizari</li>";
		$export[1] = $export[1] . "<li>" . $row['likes'] . " aprecieri</li>";
		$export[1] = $export[1] . "</ul>";
		$export[1] = $export[1] . "</div>";
		$export[1] = $export[1] . "</div>";
		$export[1] = $export[1] . "</div>";
	}

	// Generate test body
	$query = "SELECT * FROM teste WHERE id='$id' AND lang='$lang'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		$correct = $row["correct"];
		$export[1] = $export[1] . "<div class='grid'>"; 
		$export[1] = $export[1] . "<div class='markdown-body'>"; 

		// Section one
		$export[1] = $export[1] . "<h2 id='multiple'>Variante multiple</h2>"; 
		for ($i=1; $i<=5; $i++){
			$contor = "intrebare_" . $i;
			$contor_rasp = "raspuns_" . $i;
			$export[1] = $export[1] . "<p>". $i . ". " . $row[$contor] ."</p>";
			$export[1] = $export[1] . "<ul>";
			$int_array = $row[$contor_rasp];
			$int = unserialize($int_array);
			$order = array(0,1,2);
			shuffle($order);
			for ($j=0; $j<=2; $j++){
				$incremented = $order[$j] + 1;
				$export[1] = $export[1] . "<li><input type='radio' name='" . $i . "' value='" . $incremented . "'>". $int[$order[$j]] ."</li>";
			}
			$export[1] = $export[1] . "</ul>";
		}

		// Section two
		$export[1] = $export[1] . "<h2 id='output'>Output</h2>"; 
		for ($i=1; $i<=3; $i++){
			$contor = "output_" . $i;
			$contor_rasp = "code_output_" . $i;
			$export[1] = $export[1] . "<p>" . $i . ". " . $row[$contor] ."</p>";
			$export[1] = $export[1] . $row[$contor_rasp];
			$export[1] = $export[1] . "Output: <input type='text'></input>";
		}

		// Section three
		$export[1] = $export[1] . "<h2 id='drag'>Drag and drop</h2>";
		$export[1] = $export[1] . "<p>" . $row["drag_enunt"] . "</p>";
		$export[1] = $export[1] . "<div class='col-1-2'>";
		$export[1] = $export[1] . $row["drag_code"];
		$export[1] = $export[1] . "</div>";
		$export[1] = $export[1] . "<div class='col-1-2' id='draggable'>";
		$export[1] = $export[1] . $row["drag_var"];
		$export[1] = $export[1] . "</div>";
		$export[1] = $export[1] . "<div class='col-1-1'>"; 
		$export[1] = $export[1] . "<h2 id='termina'>"; 
		$export[1] = $export[1] . "<i class='fa fa-caret-square-o-right'></i> Termina testul</h2>";  
		$export[1] = $export[1] . "</div>"; 
		$export[1] = $export[1] . "</div>"; 
		$export[1] = $export[1] . "</div>";
		$export[1] = $export[1] . "<ul class='scrollspy'>";
		$export[1] = $export[1] . "<a href='#multiple'><li><div>Variante multiple</div></li></a>";
		$export[1] = $export[1] . "<a href='#output'><li><div>Output</div></li></a>";
		$export[1] = $export[1] . "<a href='#drag'><li><div>Drag and drop</div></li></a>";
		$export[1] = $export[1] . "<a href='#termina'><li><div>Termina testul!</div></li></a>";
		$export[1] = $export[1] . "</ul>";

		// Export to AJAX
		$export[2] = $correct;
		echo json_encode($export);
	}
	mysqli_close($conn);
	
?>