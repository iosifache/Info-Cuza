<html>
<head>

    <title>Panou de control - Stergere</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="css/cms.css" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="../image/favicon.ico" rel="shortcut icon" type="image/x-icon">	

</head>
<body>

    <div class="grid">
        <p class="title">Panou de control - Stergere</p>

        <?php

            // Hide errors
            error_reporting(0);
            ini_set('display_errors', 0);

            // Delete material
            if (isset($_GET['id'])){
                $conn = mysqli_connect("localhost","root","","info-cuza");
                mysqli_select_db($conn, "General");
                $id = $_GET['id'];
                $query = "SELECT id FROM General WHERE id=$id";
                $result = mysqli_query($conn, $query);
                $rows = mysqli_num_rows($result);
                if($rows<>0){
                    $query = "DELETE FROM General WHERE id=$id";
                    $result = mysqli_query($conn, $query);
                    $query = "DELETE FROM Tutorial WHERE id=$id";
                    $result = mysqli_query($conn, $query);
                    $query = "DELETE FROM Quiz WHERE id=$id";
                    $result = mysqli_query($conn, $query);
                    echo "<a href='home.php'><div class='add'>Success in stergerea materialului. Inapoi la dashboard.</div></a>";
                }
                else{
                    echo "<a href='home.php'><div class='add'>Materialul cu ID-ul precizat nu exista. Inapoi la dashboard.</div></a>";
                }
            }

        ?>

    </div>

</body>
</html>
