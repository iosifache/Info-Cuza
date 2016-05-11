<html>
<head>

    <title>Panou de control - Adaugare</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="css/cms.css" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="../image/favicon.ico" rel="shortcut icon" type="image/x-icon">	

</head>
<body>

    <div class="grid">
        <p class="title">Panou de control - Adaugare</p>
        <a href="home.php"><div class="add">Inapoi la panoul de control</div></a>
        <form action="" method="post" autocomplete="off">
            <label>ID:</label><br> <input type="text" name="id" id="id" spellcheck="false"></input><br>
            <label>Titlu:</label><br> <input type="text" name="titlu" id="titlu" spellcheck="false"></input><br>
            <label>Descriere:</label><br> <textarea name="descriere" rows="10" id="descriere" spellcheck="false"></textarea><br>
            <label>Timp:</label><br> <input type="text" name="timp" id="timp" spellcheck="false"></input><br>
            <label>Tip material:</label>
            <input type="radio" name="check" id="tutorial-check"><label>Tutorial</label>
            <input type="radio" name="check" id="quiz-check"><label>Quiz</label>
            <div id="tutorial"></div>
            <div id="quiz"></div>
            <input type="submit" id="submit" value="Publica!">
        </form>

        <?php

            // Hide errors
            error_reporting(0);
            ini_set('display_errors', 0);

            // Add material
            if (!empty($_POST)){
                $id = $_POST['id'];
                $id_array  = array_map('intval', str_split($id));
                $materie = $id_array[1];
                $tip = $id_array[0];
                $titlu = $_POST['titlu'];
                $descriere = $_POST['descriere'];
                $timp = $_POST['timp'];
                $conn = mysqli_connect("localhost","root","","info-cuza");
                mysqli_select_db($conn, "General");
                $query = "INSERT INTO General (id, titlu, tip, materie, descriere, timp) VALUES ('$id', '$titlu', '$tip', '$materie', '$descriere', '$timp')";
                $result = mysqli_query($conn, $query);
                mysqli_close($conn);
                $tutorial = $_POST['tutorial-check'];
                if (isset($_POST['tutorial-check'])){
                    $categorie1 = $categorie2 = $categorie3 = $categorie4 = $introducere = $continut1 = $continut2 = $continut3 = $continut4 = $exercitii = $celebrate_1 = $celebrate_2 = $celebrate_3 = $editor1  = $editor2  = $editor3  = "";
                    $id = $_POST['id'];
                    if(isset($_POST['categorie_1'])) $categorie1 = $_POST['categorie1'];
                    if(isset($_POST['categorie_2'])) $categorie2 = $_POST['categorie1'];
                    if(isset($_POST['categorie_3'])) $categorie3 = $_POST['categorie1'];
                    if(isset($_POST['categorie_4'])) $categorie4 = $_POST['categorie1'];
                    if(isset($_POST['introducere'])) $introducere = $_POST['introducere'];
                    if(isset($_POST['continut_categorie_1'])) $continut1 = $_POST['continut_categorie_1'];
                    if(isset($_POST['continut_categorie_2'])) $continut2 = $_POST['continut_categorie_2'];
                    if(isset($_POST['continut_categorie_3'])) $continut3 = $_POST['continut_categorie_3'];
                    if(isset($_POST['continut_categorie_4'])) $continut4 = $_POST['continut_categorie_4'];
                    if(isset($_POST['exercitii'])) $exercitii = $_POST['exercitii'];
                    if(isset($_POST['celebrate1'])) $celebrate1 = $_POST['celebrate1'];
                    if(isset($_POST['celebrate2'])) $celebrate2 = $_POST['celebrate2'];
                    if(isset($_POST['celebrate3'])) $celebrate3 = $_POST['celebrate3'];
                    if(isset($_POST['editor1'])) $editor1 = $_POST['editor1'];
                    if(isset($_POST['editor2'])) $editor2 = $_POST['editor2'];
                    if(isset($_POST['editor3'])) $editor3 = $_POST['editor3'];
                    $conn = mysqli_connect("localhost","root","","info-cuza");
                    mysqli_select_db($conn, "Tutorial");
                    $query = "INSERT INTO Tutorial (id, nume_categorie_1, nume_categorie_2, nume_categorie_3, nume_categorie_4, introducere, categorie_1, categorie_2, categorie_3, categorie_4, celebrate_1, celebrate_2, celebrate_3, exercitii, editor_1, editor_2, editor_3) VALUES ('$id', '$categorie1', '$categorie2', '$categorie3', '$categorie4', '$introducere', '$continut1', '$continut2', '$continut3', '$continut4', '$celebrate1', '$celebrate2', '$celebrate3', '$exercitii', '$editor1', '$editor2', '$editor3')";
                    $result = mysqli_query($conn, $query);
                    mysqli_close($conn);
                }
                if (isset($_POST['quiz-check'])){
                    // ADD QUIZ
                }
            }

        ?>

    </div>

    <!-- External JS scripts -->
    <script src="../javascript/jquery-2.2.0.min.js" language="JavaScript" type="text/javascript"></script>
    <script src="js/add.js" language="Javascript" type="text/javascript"></script>

</body>
</html>
