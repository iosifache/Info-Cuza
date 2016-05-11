<html>
<head>

    <title>Panou de control - Editare</title>
    <link href="../css/basic.css" rel="stylesheet" type="text/css">
    <link href="css/cms.css" rel="stylesheet" type="text/css">

    <!-- Favicon -->
    <link href="../image/favicon.ico" rel="shortcut icon" type="image/x-icon">	

</head>
<body>

    <div class="grid">
        <p class="title">Panou de control - Editare</p>
        <a href="home.php"><div class="add">Inapoi la panoul de control</div></a>

        <?php

            // Hide errors
            error_reporting(0);
            ini_set('display_errors', 0);

            // Conntect to General table
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
                $id_array  = array_map('intval', str_split($id));
                $tip = $id_array[0];
                mysqli_close($conn);

                // Create tempate for type of material
                if ($tip=1){

                    // Connect to Tutorial table
                    $conn = mysqli_connect("localhost","root","","info-cuza");
                    mysqli_select_db($conn, "Tutorial");
                    $query = "SELECT * FROM Tutorial WHERE id=$id";
            		$result = mysqli_query($conn, $query);
                    if ($row = mysqli_fetch_array($result)){
                        echo "<label>Nume categorie #1:</label><br>
                        <input type='text' name='categorie1' id='categorie1' spellcheck='false' value='" . $row['nume_categorie_1'] . "'></input><br>
                        <label>Nume categorie #2:</label><br>
                        <input type='text' name='categorie2' id='categorie2' spellcheck='false' value='" . $row['nume_categorie_2'] . "'></input><br>
                        <label>Nume categorie #3:</label><br>
                        <input type='text' name='categorie3' id='categorie3' spellcheck='false' value='" . $row['nume_categorie_3'] . "'></input><br>
                        <label>Nume categorie #4:</label><br>
                        <input type='text' name='categorie4' id='categorie4' spellcheck='false' value='" . $row['nume_categorie_4'] . "'></input><br>
                        <label>Introducere:</label><br>
                        <textarea name='introducere' rows='10' id='introducere' spellcheck='false'>" . $row['introducere'] . "</textarea><br>
                        <label>Continut categorie #1:</label><br>
                        <textarea name='continut_categorie_1' rows='10' id='continut_categorie_1' spellcheck='false'>" . $row['categorie_1'] . "</textarea><br>
                        <label>Continut categorie #2:</label><br>
                        <textarea name='continut_categorie_2' rows='10' id='continut_categorie_2' spellcheck='false'>" . $row['categorie_2'] . "</textarea><br>
                        <label>Continut categorie #3:</label><br>
                        <textarea name='continut_categorie_3' rows='10' id='continut_categorie_3' spellcheck='false'>" . $row['categorie_3'] . "</textarea><br>
                        <label>Continut categorie #4:</label><br>
                        <textarea name='continut_categorie_4' rows='10' id='continut_categorie_4' spellcheck='false'>" . $row['categorie_4'] . "</textarea><br>
                        <label>Exercitii:</label><br>
                        <textarea name='exercitii' rows='10' id='exercitii' spellcheck='false'>" . $row['exercitii'] . "</textarea><br>
                        <label>Celebrate #1:</label><br>
                        <input type='text' name='celebrate1' id='celebrate1' spellcheck='false' value='" . $row['celebrate_1'] . "'></input><br>
                        <label>Celebrate #2:</label><br>
                        <input type='text' name='celebrate2' id='celebrate2' spellcheck='false' value='" . $row['celebrate_2'] . "'></input><br>
                        <label>Celebrate #3:</label><br>
                        <input type='text' name='celebrate3' id='celebrate3' spellcheck='false' value='" . $row['celebrate_3'] . "'></input><br>
                        <label>Editor #1:</label><br>
                        <input type='text' name='editor1' id='editor1' spellcheck='false' value='" . $row['editor_1'] . "'></input><br>
                        <label>Editor #2:</label><br>
                        <input type='text' name='editor2' id='editor2' spellcheck='false' value='" . $row['editor_2'] . "'></input><br>
                        <label>Editor #3:</label><br>
                        <input type='text' name='editor3' id='editor3' spellcheck='false' value='" . $row['editor_3'] . "'></input><br>";
                    }
                }
                if ($tip=2){

                    // Connect to Quiz table
                    $conn = mysqli_connect("localhost","root","","info-cuza");
                    mysqli_select_db($conn, "Quiz");
                    $query = "SELECT * FROM Quiz WHERE id=$id";
            		$result = mysqli_query($conn, $query);
                    if ($row = mysqli_fetch_array($result)){
                        echo "<label>Intrebare #1:</label><br>
                        <input type='text' name='intrebare1' id='intrebare1' spellcheck='false' value='". $row['intrebare_1'] ."'></input><br>
                        <label>Raspuns intrebare #1:</label><br>
                        <textarea name='raspuns_intrebare_1' rows='10' id='raspuns_intrebare_1' spellcheck='false'> value='". $row['raspuns_1'] ."'</textarea><br>
                        <label>Intrebare #2:</label><br>
                        <input type='text' name='intrebare2' id='intrebare2' spellcheck='false' value='". $row['intrebare_2'] ."'></input><br>
                        <label>Raspuns intrebare #2:</label><br>
                        <textarea name='raspuns_intrebare_2' rows='10' id='raspuns_intrebare_2' spellcheck='false'> value='". $row['raspuns_2'] ."'</textarea><br>
                        <label>Intrebare #3:</label><br>
                        <input type='text' name='intrebare3' id='intrebare3' spellcheck='false' value='". $row['intrebare_3'] ."'></input><br>
                        <label>Raspuns intrebare #3:</label><br>
                        <textarea name='raspuns_intrebare_3' rows='10' id='raspuns_intrebare_3' spellcheck='false'> value='". $row['raspuns_3'] ."'</textarea><br>
                        <label>Intrebare #4:</label><br>
                        <input type='text' name='intrebare4' id='intrebare4' spellcheck='false' value='". $row['intrebare_4'] ."'></input><br>
                        <label>Raspuns intrebare #4:</label><br>
                        <textarea name='raspuns_intrebare_4' rows='10' id='raspuns_intrebare_4' spellcheck='false'> value='". $row['raspuns_4'] ."'</textarea><br>
                        <label>Intrebare #5:</label><br>
                        <input type='text' name='intrebare5' id='intrebare5' spellcheck='false' value='". $row['intrebare_5'] ."'></input><br>
                        <label>Raspuns intrebare #5:</label><br>
                        <textarea name='raspuns_intrebare_5' rows='10' id='raspuns_intrebare_5' spellcheck='false'> value='". $row['raspuns_5'] ."'</textarea><br>
                        <label>Output #1:</label><br>
                        <input type='text' name='output1' id='output1' spellcheck='false' value='". $row['output_1'] ."'></input><br>
                        <label>Raspuns intrebare #1:</label><br>
                        <textarea name='output_code_1' rows='10' id='output_code_1' spellcheck='false'>". $row['code_output_1'] ."</textarea><br>
                        <label>Output #2:</label><br>
                        <input type='text' name='output2' id='output2' spellcheck='false' value='". $row['output_2'] ."'></input><br>
                        <label>Raspuns intrebare #2:</label><br>
                        <textarea name='output_code_2' rows='10' id='output_code_2' spellcheck='false'>". $row['code_output_2'] ."</textarea><br>
                        <label>Output #3:</label><br>
                        <input type='text' name='output3' id='output3' spellcheck='false' value='". $row['output_3'] ."'></input><br>
                        <label>Raspuns intrebare #3:</label><br>
                        <textarea name='output_code_3' rows='10' id='output_code_3' spellcheck='false'>". $row['code_output_3'] ."</textarea><br>
                        <label>Drag code:</label><br>
                        <textarea name='drag_code' rows='10' id='drag_code' spellcheck='false'>". $row["drag_code"] ."</textarea><br>
                        <label>Drag variantes:</label><br>
                        <textarea name='drag_variantes' rows='10' id='drag_variantes' spellcheck='false'>". $row["drag_var"] ."</textarea><br>";
                    }
                }
                print("<input type='submit' value='Publica!'>");
                print("</form>");
            }

            // Update data
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
                $result = mysqli_query($conn, $query);
                if ($tip=1){
                    $categorie1="";
                    $categorie2="";
                    $categorie3="";
                    $categorie4="";
                    $introducere="";
                    $continut1="";
                    $continut2="";
                    $continut3="";
                    $continut4="";
                    $exercitii="";
                    $celebrate_1="";
                    $celebrate_2="";
                    $celebrate_3="";
                    $editor1 ="";
                    $editor2 ="";
                    $editor3 ="";
                    $id = $_POST['id'];
                    if(isset($_POST['categorie_1'])){
                        $categorie1 = $_POST['categorie1'];
                    }
                    if(isset($_POST['categorie_2'])){
                        $categorie2 = $_POST['categorie1'];
                    }
                    if(isset($_POST['categorie_3'])){
                        $categorie3 = $_POST['categorie1'];
                    }
                    if(isset($_POST['categorie_4'])){
                        $categorie4 = $_POST['categorie1'];
                    }
                    if(isset($_POST['introducere'])){
                        $introducere = $_POST['introducere'];
                    }
                    if(isset($_POST['continut_categorie_1'])){
                        $continut1 = $_POST['continut_categorie_1'];
                    }
                    if(isset($_POST['continut_categorie_2'])){
                        $continut2 = $_POST['continut_categorie_2'];
                    }
                    if(isset($_POST['continut_categorie_3'])){
                        $continut3 = $_POST['continut_categorie_3'];
                    }
                    if(isset($_POST['continut_categorie_4'])){
                        $continut4 = $_POST['continut_categorie_4'];
                    }
                    if(isset($_POST['exercitii'])){
                        $exercitii = $_POST['exercitii'];
                    }
                    if(isset($_POST['celebrate1'])){
                        $celebrate1 = $_POST['celebrate1'];
                    }
                    if(isset($_POST['celebrate2'])){
                        $celebrate2 = $_POST['celebrate2'];
                    }
                    if(isset($_POST['celebrate3'])){
                        $celebrate3 = $_POST['celebrate3'];
                    }
                    if(isset($_POST['editor1'])){
                        $editor1 = $_POST['editor1'];
                    }
                    if(isset($_POST['editor2'])){
                        $editor2 = $_POST['editor2'];
                    }
                    if(isset($_POST['editor3'])){
                        $editor3 = $_POST['editor3'];
                    }
                    $conn = mysqli_connect("localhost","root","","info-cuza");
                    mysqli_select_db($conn, "Tutorial");
                    $query = "UPDATE Tutorial SET id=$id, nume_categorie_1=$categorie1, nume_categorie_2=$categorie2, nume_categorie_3=$categorie3, nume_categorie_4=$categorie4, introducere=$introducere, categorie_1=$continut1, categorie_2=$continut2, categorie_3=$continut3, categorie_4=$continut4, celebrate_1=$celebrate1, celebrate_2=$celebrate2, celebrate_3=$celebrate3, exercitii=$exercitii, editor_1=$editor1, editor_2=$editor2, editor_3=$editor3 WHERE id=$id";
                    $result = mysqli_query($conn, $query);
                }
                if ($tip=2){

                    // UPDATE QUIZ
                }
            }

        ?>

    </div>

</body>
</html>
