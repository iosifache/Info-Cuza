<?php

	/* 

	randomSubtle - librarie PHP utilizata pentru a alege un oattern aleator 

	Obs: Pnetru a obtine mai multe request-uri intr-o singura pagina. se va adauga la sfarsit "?rand=numar", unde numar este un contor de la 1 la numarul maxim de request-uri necesare in pagina.

	Utilizare: se va include ca link al unei imagini "randomSubtle.php"

	*/

	$number = rand(1, 356);
	$name = "(" . $number . ").png";
	echo $name;
	header("Content-Type: image/png");
	header("Location: ../../image/subtle/" . $name);

?>