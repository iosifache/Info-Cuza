<?php

    // Connect
    require 'connect.php';

    $action = $_GET["action"];
    if ($action == "change"){

        // Get used type of background
        $query = "SELECT * FROM background LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

        // Page header
        if ($used==0){
            $query = "UPDATE background SET type='1'";
            $result = mysqli_query($conn, $query);
            echo "Subtle pattern";
        }
        else{
            $query = "UPDATE background SET type='0'";
            $result = mysqli_query($conn, $query);
            echo "Unsplash";
        }

    }
    else if ($action == "list"){

        // Get used type of background
        $query = "SELECT * FROM background LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

        // Page header
        if ($used==0){
            echo "Unspash";
        }
        else{
            echo "Subtle pattern";
        }

    }
    else if ($action == "use"){

        // Get used type of background
        $query = "SELECT * FROM background LIMIT 1";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $used = $row[0];

    }

    // Disconnect
    mysqli_close($conn);

?>
