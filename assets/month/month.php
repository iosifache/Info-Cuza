<?php

	/* 

	month - librarie PHP cu functii ce transforma luna returnata in cifre de la 01 la 12 in siruri de litere usor de identificat in limba romana

	Obs: Libraria cuprinde doua functii:
	1. month_beautifier($month): printeza direct rezultatul 
	2. month_beautifier_return($month): returneaza rezultatul

	Utilizare: 
	1. Includere librarie
	require 'month.php';
	2. Folosirea functiilor
	month_beautifier(04):
	echo month_beautifier_return(12):

	*/

	function month_beautifier($month){
		switch ($month){
			case "01":
				echo "IAN";
				break;
			case "02":
				echo "FEB";
				break;
			case "03":
				echo "MAR";
				break;
			case "04":
				echo "APR";
				break;
			case "05":
				echo "MAI";
				break;
			case "06":
				echo "IUL";
				break;
			case "07":
				echo "IUN";
				break;
			case "08":
				echo "AUG";
				break;
			case "09":
				echo "SEP";
				break; 
			case "10":
				echo "OCT";
				break;
			case "11":
				echo "NOI";
				break;     
			case "12":
				echo "DEC";
				break;
		}
	}
	function month_beautifier_return($month){
		switch ($month){
			case "01":
				return "IAN";
				break;
			case "02":
				return "FEB";
				break;
			case "03":
				return "MAR";
				break;
			case "04":
				return "APR";
				break;
			case "05":
				return "MAI";
				break;
			case "06":
				return "IUL";
				break;
			case "07":
				return "IUN";
				break;
			case "08":
				return "AUG";
				break;
			case "09":
				return "SEP";
				break; 
			case "10":
				return "OCT";
				break;
			case "11":
				return "NOI";
				break;     
			case "12":
				return "DEC";
				break;
		}
	}
	
?>