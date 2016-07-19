<?php

	//  Hostinger
	// define('server', 'mysql.hostinger.co.uk');
	// define('user', 'u412979867_data');
	// define('password', 'u412979867');
	// define('database', 'u412979867_data');
	
	// Localhost
	define('server', 'localhost');
	define('user', 'root');
	define('password', 'root');
	define('database', 'infocuza');

	// Connect
	$conn = mysqli_connect(server, user, password, database);

?>