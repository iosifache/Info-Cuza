<?php

	// Pentru conectarea la Hostinger, se va contacta autorul.

	// Localhost
	define('server', 'localhost');
	define('user', 'root');
	define('password', '');
	define('database', 'infocuza');

	// Connect
	$conn = mysqli_connect(server, user, password, database);

?>
