<?php

    // Connect
    require 'connect.php';

    $action = $_GET["action"];
    if ($action == "change"){

        // Check if admin use animation
        $query = "SELECT * FROM animation LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

        // Page header
        if ($used==0){
            $query = "UPDATE animation SET type='1'";
            $result = mysqli_query($conn, $query);
            echo "Activate";
        }
        else{
            $query = "UPDATE animation SET type='0'";
            $result = mysqli_query($conn, $query);
            echo "Dezactivate";
        }

    }
    else if ($action == "check"){

        // Check if admin use animation
        $query = "SELECT * FROM animation LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

        // Export
        if ($used==0){
            echo "0";
        }
        else if ($used==1){
            echo "1";
        }

    }
    else if ($action == "use"){

        // Check if admin use animation
        $query = "SELECT * FROM animation LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

    }

    // Disconnect
    mysqli_close($conn);

?>
