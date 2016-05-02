<html>
<head>

	<title>InfoCuza - Tutorial</title>

	<!-- Meta tags -->
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

	<!-- Share infos -->
	<link href="" rel="image_src" type="image/jpeg">
	<meta content="" property="og:image">
	<meta content="" property="og:title">
	<meta content="" property="og:description">

</head>
<body>

	<!-- Loading -->
    <div class="loading-background" id="loading">
        <i class="fa fa-5x fa-spinner fa-spin"></i>
    </div>

	<?php
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

		// Connect - take data from Tutorial
		$conn = mysqli_connect("localhost", "root", "", "info-cuza");
		mysqli_select_db($conn, "Tutorial");
		$query = "SELECT * FROM Tutorial WHERE id=$id";
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
			print("<a href='tutorial.php?id=" . $new_id . "'><li class='bold swich'>C++</li></a>");
			$id_array[2]=2;
			$new_id = implode("", $id_array);
			print("<a href='tutorial.php?id=" . $new_id . "'><li class='bold swich'>Pascal</li></a>");
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
		print("<div class='grid'>");

		// Scrollspy
		print("<div class='scrollspy' id='scrollspy'>");
		print("<ul>");
		print("<a href='#intro'><li id='scrollspylink0'>Introducere</li></a>");
		print("<a href='#section1'><li id='scrollspylink1'>" . $row['nume_categorie_1'] . "</li></a>");
		print("<a href='#section2'><li id='scrollspylink2'>" . $row['nume_categorie_2'] . "</li></a>");
		print("<a href='#section3'><li id='scrollspylink3'>" . $row['nume_categorie_3'] . "</li></a>");
		print("<a href='#section4'><li id='scrollspylink4'>" . $row['nume_categorie_4'] . "</li></a>");
		print("<a href='#exercitii'><li id='scrollspylink5'>Exercitii propuse</li></a>");
		print("<a href='#felicitari'><li id='scrollspylink6'>Felicitari!</li></a>");
		print("</ul>");
		print("</div>");

		// Tutorial
		print("<div class='infos markdown-body'>");
		print("<h2 id='intro'>Introducere</h2>");
		print($row['introducere']);
		print("<h2 id='section1'>" . $row['nume_categorie_1'] . "</h2>");
		print($row['categorie_1']);
		print("<h2 id='section2'>" . $row['nume_categorie_2'] . "</h2>");
		print($row['categorie_2']);
		print("<h2 id='section3'>" . $row['nume_categorie_3'] . "</h2>");
		print($row['categorie_3']);
		print("<h2 id='section4'>" . $row['nume_categorie_4'] . "</h2>");
		print($row['categorie_4']);
		print("<h2 id='exercitii'>Exercitii propuse</h2>");
		print($row['exercitii']);
		print("<h2 id='felicitari'>Felicitari!</h2>");
		print("<p>In acesta lectie ai invatat:</p>");
		print("<ul class='with'>");
		print("<li>" . $row['celebrate_1'] . "</li>");
		print("<li>" . $row['celebrate_2'] . "</li>");
		print("<li>" . $row['celebrate_3'] . "</li>");
		print("</ul>");
		print("<p>Multumim urmatorilor editori pentru furnizarea informatiilor:</p>");
		print("<ul class='with'>");
		print("<li>" . $row['editor_1'] . "</li>");
		print("<li>" . $row['editor_2'] . "</li>");
		print("<li>" . $row['editor_3'] . "</li>");
		print("</ul>");
		print("</div>");
		print("</div>");

		// Close connection
		mysqli_close($conn);
	?>

    <!-- Footer -->
	<div class="grid">
	    <div class="footer">
	        <p>InfoCuza este cea mai buna metoda de a stapani</p>
	        <img src="image/forta.png">
	    </div>
	</div>

	<!-- External JS Script -->
    <script src="javascript/jquery-2.2.0.min.js" language="JavaScript" type="text/javascript"></script>
    <script src="javascript/generate.tutorial.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/smooth-scroll.js" language="JavaScript" type="text/javascript"></script>
	<script src="javascript/scrollspy.tutorial.js" language="JavaScript" type="text/javascript"></script>

</body>
</html>
