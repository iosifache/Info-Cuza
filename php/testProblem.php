    <?php

    // Turn off error reporting
    error_reporting(0);
    error_reporting(E_ERROR | E_WARNING | E_PARSE);
    error_reporting(E_ALL);
    ini_set("error_reporting", E_ALL);
    error_reporting(E_ALL & ~E_NOTICE);

    // Connect
    require 'connect.php';

    // GET data
    $id = (int)$_GET["id"];

    // Get problem data from DB
    $query = "SELECT * FROM probleme WHERE id='$id'";
    $result = mysqli_query($conn, $query);
    $export = array();
    while ($row = mysqli_fetch_array($result)){
    	$testeDB = $row['teste'];
        $restrictieTimp = $row['restrictieTimp'];
        $restrictieSpatiu = $row['restrictieSpatiu'];
    }
    $teste = unserialize($testeDB);

    // GET data
    $sourceCode = $_GET["sourceCode"];
    str_replace("%0A", "\n", $sourceCode);
    str_replace("++++", "\t", $sourceCode);
    $langId = $_GET["langId"];
    str_replace("%0A", "\n", $stdin);
    str_replace("++++", "\t", $stdin);

    // cURL init
    $curl = curl_init();

    // Verify
    $score = 0;
    $timp = 100000;
    $spatiu = 100000;
    $export = array("","","","");
    for ($i = 0; $i <= 2; $i++){

        // Input
        $stdin = $teste[$i]["input"];

        // Get submission ID
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => 'http://cloudcompiler.esy.es/api/submissions/',
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => array(
                sourceCode => $sourceCode,
                langId => $langId,
                stdin => $stdin,
                timeLimit => 1
            )
        ));
        $resp = curl_exec($curl);
        $resp_array = json_decode($resp, true);
        $id = $resp_array['id'];

        // Get submission result
        sleep(3);
        $url = 'http://cloudcompiler.esy.es/api/submissions/' . $id;
        curl_setopt_array($curl, array(
          CURLOPT_RETURNTRANSFER => 1,
          CURLOPT_URL => $url
        ));
        $resp = curl_exec($curl);
        $resp_array = json_decode($resp, true);

        // Compare output
        $output = $resp_array["stdout"];
        if ($teste[$i]["output"] == $output){
            $score = $score + 1;
        }
        if ($resp_array["time"]<$timp){
            $timp = $resp_array["time"];
        }
        if ($resp_array["memory"]<$spatiu){
            $spatiu = $resp_array["memory"];
        }

    }
    $array[0] = $score;
    $array[1] = count($teste);
    if ($timp <= $restrictieTimp){
        $array[2] = 1;
    }
    else{
        $array[2] = 0;
    }
    if ($spatiu <= $restrictieSpatiu){
        $array[3] = 1;
    }
    else{
        $array[3] = 0;
    }
    echo json_encode($array);

    // cURL close
    curl_close($curl);

    ?>
