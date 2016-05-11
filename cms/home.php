<html>
<head>

    <title>Panou de control</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="css/cms.css" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="../image/favicon.ico" rel="shortcut icon" type="image/x-icon">	

</head>
<body>

    <div class="grid">
        <p class="title">Panou de control</p>
        <a href="add.php"><div class="add">Adaugare tutorial sau quiz</div></a>

        <?php

            // Hide errors
            error_reporting(0);
            ini_set('display_errors', 0);

            // Connect
            $conn = mysqli_connect("localhost","root","","info-cuza");
            mysqli_select_db($conn, "General");
            $query = "SELECT * FROM General";
            $result = mysqli_query($conn, $query);
            while($row = mysqli_fetch_array($result)){
                $id = $row['id'];
                print("<div class='record'>");
                print("<div class='row'>");
                print("<p>ID:</p>");
                print("<p>" . $row['id'] . "</p>");
                print("</div>");
                print("<div class='row'>");
                print("<p>Titlu:</p>");
                print("<p>" . $row['titlu'] . "</p>");
                print("</div>");
                if ($row['tip']==1){
    				$link = '../tutorial.php?id=' . $row['id'];
    			}
    			else{
    				$link = '../quiz.php?id=' . $row['id'];
    			}
                print("<a href='" . $link . "'><div class='button'>Vizualizeaza</div></a>");
                print("<a href='edit.php?id=" . $id . "'><div class='button'>Editeaza</div></a>");
                print("<a href='#delete_modal" . $row['id'] ."'><div class='button'>Sterge</div></a>");
                print("</div>");
                print("<div id='delete_modal" . $row['id'] ."' class='modalDialog'>");
                print("<div><a href='#close' class='close'>X</a>");
                print("<h2>Esti sigur ca vrei sa stergi acest material?</h2>");
                print("<a href='delete.php?id=" . $row['id'] . "'><div class='add'>Da. Sterge-l.</div></a>");
                print("</div>");
                print("</div>");
        	}

            // Disconnect
            mysqli_close($conn);

        ?>
    </div>

</body>
</html>
