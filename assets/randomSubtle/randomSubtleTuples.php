<?php

	/*

	randomSubtle - librarie PHP utilizata pentru a alege un pattern aleator

	Obs: Pentru a obtine mai multe request-uri intr-o singura pagina. se va adauga la sfarsit "?rand=numar", unde numar este un contor de la 1 la numarul maxim de request-uri necesare in pagina.

	Utilizare: se va include ca link al unei imagini "randomSubtle.php". Se pot utiliza:
    -randomSubtle.php, care returneaza un URL al pattern-ului
    - randomSubtleTuples.php, care returneaza un URL al pattern-ului si de ce categorie apartine "Dark" sau "Light"

	*/

	ini_set("allow_url_fopen", 1);
	$number = rand(1, 2);
	if ($number == 1){
		$dir = "Light";
	}
	else if ($number == 2){
		$dir = "Dark";
	}
	$files = scandir('../../image/subtle/' . $dir . "/");
	$randomIndex = array_rand($files);
	$name = $files[$randomIndex];
	$location = "image/subtle/" . $dir . "/" . $name;
	echo json_encode(array($location, $dir));

?>
