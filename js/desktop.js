$(document).ready(function(){

	// Windows
	if (navigator.appVersion.indexOf("Win")!=-1){
		$("#desktop").attr("href", "desktop/Windows.zip")
	}

	// Mac
	if (navigator.appVersion.indexOf("Mac")!=-1){
		$("#desktop").attr("href", "desktop/MacOS.zip")
	}

	// Linux
	if (navigator.appVersion.indexOf("Linux")!=-1){
		$("#desktop").attr("href", "desktop/Windows.zip")
	}
	
});