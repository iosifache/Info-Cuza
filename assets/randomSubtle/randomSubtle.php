<?php

	/*

	randomSubtle - librarie PHP utilizata pentru a alege un pattern aleator

	Obs: Pentru a obtine mai multe request-uri intr-o singura pagina. se va adauga la sfarsit "?rand=numar", unde numar este un contor de la 1 la numarul maxim de request-uri necesare in pagina.

	Utilizare: se va include ca link al unei imagini "randomSubtle.php". Se pot utiliza:
	-randomSubtle.php, care returneaza un URL al pattern-ului
	- randomSubtleTuples.php, care returneaza un URL al pattern-ului si de ce categorie apartine "Dark" sau "Light"

	*/

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
	header("Content-Type: image/png");
	header("Location: ../../image/subtle/" . $dir . "/" . $name);

?>
