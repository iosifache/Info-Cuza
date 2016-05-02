<html>
<head>
    <title>My CMS</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="../css/cms.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div class="grid">
        <p class="title">Admin panel</p>
        <a href="add.php"><div class="add">Add tutorial or quiz</div></a>
        <?php
            $conn = mysqli_connect("localhost","root","","info-cuza");
            mysqli_select_db($conn, "General");
            $query = "SELECT * FROM General";
            $result = mysqli_query($conn, $query);
            while($row = mysqli_fetch_array($result)){
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
                print("<a href='edit.php?id=" . $row['id'] . "'><div class='button'>Editeaza</div></a>");
                print("<a href='delete.php?id=" . $row['id'] . "'><div class='button'>Sterge</div></a>");
                print("</div>");
        	}
            print("</table>");
            mysqli_close($conn);
        ?>
    </div>
</body>
</html>
