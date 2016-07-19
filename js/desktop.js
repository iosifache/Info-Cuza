$(document).ready(function(){
	if (navigator.appVersion.indexOf("Win")!=-1){
		$("#desktop").attr("href", "desktop/Windows.zip")
	}
	if (navigator.appVersion.indexOf("Mac")!=-1){
		$("#desktop").attr("href", "desktop/MacOS.zip")
	}
	if (navigator.appVersion.indexOf("Linux")!=-1){
		$("#desktop").attr("href", "desktop/Windows.zip")
	}
});