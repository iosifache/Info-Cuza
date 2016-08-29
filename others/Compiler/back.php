<?php

  // Compile and test if exist error
  $file_name = ((int)(rand() * 100)) . time() . ".cpp";
  file_put_contents($file_name, $_GET['code']);
  exec("g++ -o " . $file_name . ".exe " . $file_name . " 2> compile_" . $file_name . ".log");
  $errors = file_get_contents("compile_" . $file_name . ".log");

  $export = array();

  // IF errors
  if($errors != ""){
    $export[0] = str_replace($file_name . ":", "<br>", $errors);
    $export[1] = 0;
  }

  // IF no errors
  else{
    exec($file_name . ".exe ", $out);
    $export[0] = "";
    foreach ($out as $key => $val){
      $export[0] = $export[0] .  $val . "<br>";
    }
    $export[1] = 1;
    unlink($file_name . ".exe");
  }

  // Delete files
  unlink($file_name);
  unlink("compile_" . $file_name . ".log");

  // Export
  echo json_encode($export);
  // echo $export[0];

?>
