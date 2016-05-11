<html>
<head>

	<!-- Title and meta -->
	<title>InfoCuza - Quiz</title>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- Stylesheets -->
	<link href="css/basic.css" rel="stylesheet" type="text/css">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="https://guides.github.com/components/primer/markdown.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200,600,700,900" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="image/favicon.ico" rel="shortcut icon" type="image/x-icon">

</head>
<body>

	<!-- Loading -->
    <div class="loading-background" id="loading">
        <i class="fa fa-5x fa-spinner fa-spin"></i>
    </div>

	<?php

		// Hide errors
		error_reporting(0);
		ini_set('display_errors', 0);

		// Connect - take from General usual data
	    $id = htmlspecialchars($_GET["id"]);
	    $id_array  = array_map('intval', str_split($id));
	    if ($id_array[2]==2){
	        $id_array[2]=1;
	    }
	    $new_id = implode("", $id_array);
	    $conn = mysqli_connect("localhost", "root", "", "info-cuza");
	    mysqli_select_db($conn, "General");
	    $query = "SELECT * FROM General WHERE id=$new_id";
	    $result = mysqli_query($conn, $query);
	    $row = mysqli_fetch_array($result);
	    $titlu = $row['titlu'];
	    $timp = $row['timp'];
	    $materie = $row['materie'];
	    mysqli_close($conn);

		// Connect - take from Quiz
		$conn = mysqli_connect("localhost", "root", "", "info-cuza");
		mysqli_select_db($conn, "Tutorial");
		$query = "SELECT * FROM Quiz WHERE id=$id";
		$result = mysqli_query($conn, $query);
		$row = mysqli_fetch_array($result);

	    // Header
	    print("<div class='grid'>");
	    print("<div class='header'>");
	    print("<ul>");
	    print("<a href='index.php'><li class='bold'>Acasa</li></a>");
	    if ($materie==1){
	        print("<li class='bold'>Limbaje de programare:</li>");
	        $id_array[2]=1;
	        $new_id = implode("", $id_array);
	        print("<a href='quiz.php?id=" . $new_id . "'><li class='bold swich'>C++</li></a>");
	        $id_array[2]=2;
	        $new_id = implode("", $id_array);
	        print("<a href='quiz.php?id=" . $new_id . "'><li class='bold swich'>Pascal</li></a>");
	    }
	    print("</ul>");
	    print("<p>");
	    print("<i class='ultra-bold'>Info</i>");
	    print("<i class='normal'>Cuza</i>");
	    print("</p>");
	    print("</div>");
	    print("</div>");

	    // Intro
	    print("<div class='intro'>");
	    print("<div class='grid'>");
	    print("<p class='tutorial-title bold'>" . $titlu ."</p>");
	    print("<div class='card-tuts'>");
	    print("<i class='fa fa-clock-o'></i>");
	    print($timp . " minute");
	    print("</div>");
	    print("</div>");
	    print("</div>");

		// Scrollspy
		print("<div class='grid'>");
		print("<div class='scrollspy' id='scrollspy'>");
		print("<ul>");
		print("<a href='#section1'><li id='scrollspylink1'>Variante multiple</li></a>");
		print("<a href='#section2'><li id='scrollspylink2'>Output</li></a>");
		print("<a href='#section3'><li id='scrollspylink3'>Drag and drop</li></a>");
		print("</ul>");
		print("</div>");

		// Quiz
		print("<div class='infos markdown-body'>");
		print("<h2 id='section1'>Variante multiple</h2>");
		for ($i=1; $i<=5; $i++){
			$contor = "intrebare_" . $i;
			$contor_rasp = "raspuns_" . $i;
			print("<p>". $i . ". " . $row[$contor] ."</p>");
			print("<ul>");
			$int_array = $row[$contor_rasp];
			$int = unserialize($int_array);
			for ($j=0; $j<=2; $j++){
				$incremented = $j + 1;
				print("<li><input type='radio' name='' value='" . $incremented . "'>". $int[$j] ."</li>");
			}
			print("</ul>");
		}
		print("<h2 id='section2'>Output</h2>");
		for ($i=1; $i<=3; $i++){
			$contor = "output_" . $i;
			$contor_rasp = "code_output_" . $i;
			print("<p>" . $i . ". " . $row[$contor] ."</p>");
			print($row[$contor_rasp]);;
			print("Output: <input type='text'></input>");
		}
		print("<h2 id='section3'>Drag and drop</h2>");
		print("<p>Sa se afiseze toate prefixele unui cuvant.</p>");
		print("<div class='col-1-2'>");
		print($row["drag_code"]);
		print("</div>");
		print("<div class='col-1-2' id='draggable'>");
		print($row["drag_var"]);
		print("</div>");
		print("<h2 id='calc'><i class='fa fa-caret-square-o-right'></i> Termina testul</h2>");
		print("<p>Ai acumulat <strong id='score'></strong> puncte.</p>");
		print("<p id='result-message'></p>");
		print("</div>");
		print("</div>");
		$correct = $row["correct"];
		print("<div id='hidded' style='display: none;'>" . $correct . "</div>");

		// Disconnect
		mysqli_close($conn);

	?>

    <!-- Footer -->
	<div class="grid">
	    <div class="footer">
	        <p>InfoCuza este cea mai buna metoda de a stapani</p>
	        <img src="image/forta.png">
	    </div>
	</div>

	<!-- External JS scripts -->
	<script src="javascript/jquery-2.2.0.min.js" language="JavaScript" type="text/javascript"></script>
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/generate.quiz.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/smooth-scroll.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/scrollspy.quiz.js" language="JavaScript" type="text/javascript"></script>

</body>
</html>
