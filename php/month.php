<?php

	// Function with printing
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

	// Function with return
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