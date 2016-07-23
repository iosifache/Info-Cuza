$(document).ready(function(){

	var resolution = $(this);
	var clicks = 0;

	// Set menu if width is less than 650px
	if (resolution.width() <= 650){
		$('.nav-mobile-button').click(function(){
			if(clicks%2==0){
				$('.nav-mobile-list').css("display", "block");
				clicks++;
			}
			else{
				$('.nav-mobile-list').css("display", "none");
				clicks++;
			}
		});
	}
	
});