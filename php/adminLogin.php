<?php

    // Connect and query
    require 'connect.php';

    // GET data
    $user = $_GET["user"];
    $password = $_GET["password"];

    // Verify if user email is valid and password contain only letters and numbers
    if ((!filter_var($user, FILTER_VALIDATE_EMAIL)===false)&&(ctype_alnum($_GET["password"]))){

        // Query
        $query = "SELECT * FROM admin WHERE user='$user'";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_array($result);
        $count = mysqli_num_rows($result);

        // No user
        if ($count==0){
            echo "0";
        }
        else if($count==1){
            $hash = $row['password'];

            // Correct login data
            if (password_verify($password, $hash)){
                echo "1";
            }

            // Incorrect password
            else{
                echo "2";
            }
        }

    }
    else{
        echo "0";
    }

    // Disconnect
    mysqli_close($conn);

?>
