<?php

	/* 
	
	showErrors - librarie PHP folosita pentru a afisa erorile

	Utilizare: se va include in fisierul PHP ale carui erori doresc a fi afisate
	require 'showErrors.php';

	*/

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	
?>