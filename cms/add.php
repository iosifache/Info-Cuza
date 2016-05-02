<html>
<head>
    <title>My CMS</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="../css/cms.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="grid">
        <p class="title">Admin panel - Add</p>
        <form action="<?=$_SERVER['PHP_SELF'];?>" method="post" autocomplete="off">
            <label>ID:</label><br> <input type="text" name="id" id="id" spellcheck="false"></input><br>
            <label>Titlu:</label><br> <input type="text" name="titlu" id="titlu" spellcheck="false"></input><br>
            <label>Descriere:</label><br> <textarea name="descriere" rows="10" id="descriere" spellcheck="false"></textarea><br>
            <label>Timp:</label><br> <input type="text" name="timp" id="timp" spellcheck="false"></input><br>
            <input type="submit">
        </form>
        <?php
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
                if (mysqli_query($conn, $query)) {
                    echo "New record created successfully";
                }
                else {
                    echo "Error: " . $query . "<br>" . mysqli_error($conn);
                }
            }
            mysqli_close($conn);
        ?>
</div>
</body>
</html>
