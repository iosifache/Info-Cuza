$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>324){
        $('#scrollspy').css({ 'position': 'fixed', 'top' : '10', 'right':'calc((100% - 960px)/2)' });
    }
    else{
        $('#scrollspy').css({ 'position': 'relative', 'top': '0'});
    }
	var section1 = $('#section1');
	var section2 = $('#section2');
    var section3 = $('#section3');
    var Top1 = section1.offset().top;
	var Top2 = section2.offset().top;
    var Top3 = section3.offset().top;
	if(scrollTop>Top1){
		$('#scrollspylink1').css({'font-weight': '800'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '300'});
	}
	if(scrollTop>Top2){
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '800'});
		$('#scrollspylink3').css({'font-weight': '300'});
	}
	if(scrollTop>Top3){
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '800'});
	}
});