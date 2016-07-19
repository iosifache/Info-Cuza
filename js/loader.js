// Launch function
function loader_launch(){
	$('.loader').css("display","block");
}

// Launch function with timer of 2s
function loader_init_hide(){
	var start = new Date();
	$(window).load(function(){
		var load = new Date() - start;
		if (load < 2000){
			var wait = 2000- load;
			setTimeout(function(){ 
				$('.loader').css("display","none");
			}, wait);
		}
	});
}

// Hide function
function loader_hide(){
	setTimeout(function(){ 
		$('.loader').css("display","none");
		$('html, body').removeAttr("style");
	}, 2000);
}

// Page loading
loader_hide();