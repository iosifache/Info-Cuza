<html>
<head>
    <title>My CMS</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="../css/cms.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="grid">
        <p class="title">Admin panel - Edit</p>
        <?php
            $id = htmlspecialchars($_GET["id"]);
            $id_array  = array_map('intval', str_split($id));
            $materie = $id_array[1];
            $tip = $id_array[0];
            $conn = mysqli_connect("localhost","root","","info-cuza");
            mysqli_select_db($conn, "General");
            $query = "SELECT * FROM General WHERE id=$id";
    		$result = mysqli_query($conn, $query);
    		if ($row = mysqli_fetch_array($result)){
                print("<form action='' method='post' autocomplete='off'>");
                print("<label>ID:</label><br><input type='text' name='id' id='id' spellcheck='false' value='" . $row['id'] . "'></input><br>");
                print("<label>Titlu:</label><br><input type='text' name='titlu' id='titlu' spellcheck='false' value='" . $row['titlu'] . "'></input><br>");
                print("<label>Descriere:</label><br><textarea name='descriere' rows='10' id='descriere' spellcheck='false'>" . $row['descriere'] . "</textarea><br>");
                print("<label>Timp:</label><br><input type='text' name='timp' id='timp' spellcheck='false' value='" . $row['timp'] . "'></input><br>");
                print("<input type='submit'>");
                print("</form>");
            }
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
                $query = "UPDATE General SET id='$id', titlu='$titlu', tip='$tip', materie='$materie', descriere='$descriere', timp='$timp' WHERE id=$id";
                if (mysqli_query($conn, $query)) {
                    echo "Updated";
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
