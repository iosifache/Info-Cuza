<?php
    if (isset($_GET['id'])){
        $conn = mysqli_connect("localhost","root","","info-cuza");
        mysqli_select_db($conn, "General");
        $id = $_GET['id'];
        $query = "DELETE FROM General WHERE id=$id";
        $result = mysqli_query($conn, $query);
    }
?>
