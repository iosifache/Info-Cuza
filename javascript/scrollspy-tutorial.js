$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var section0 = $('#description');
	var section1 = $('#section1');
	var section2 = $('#section2');
	var section3 = $('#section3');
	var section4 = $('#section4');
	var section5 = $('#section5');
    var Top0 = section0.offset().top;
    var Top1 = section1.offset().top;
	var Top2 = section2.offset().top;
	var Top3 = section3.offset().top;
	var Top4 = section4.offset().top;
	var Top5 = section5.offset().top;
    if(scrollTop>Top0){
    	$('#scrollspylink0').css({'font-weight': '800'});
    	$('#scrollspylink1').css({'font-weight': '300'});
    	$('#scrollspylink2').css({'font-weight': '300'});
    	$('#scrollspylink3').css({'font-weight': '300'});
    	$('#scrollspylink4').css({'font-weight': '300'});
    	$('#scrollspylink5').css({'font-weight': '300'});
    }
	if(scrollTop>Top1){
    	$('#scrollspylink0').css({'font-weight': '300'});
		$('#scrollspylink1').css({'font-weight': '800'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '300'});
		$('#scrollspylink4').css({'font-weight': '300'});
		$('#scrollspylink5').css({'font-weight': '300'});
	}
	if(scrollTop>Top2){
        $('#scrollspylink0').css({'font-weight': '300'});
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '800'});
		$('#scrollspylink3').css({'font-weight': '300'});
		$('#scrollspylink4').css({'font-weight': '300'});
		$('#scrollspylink5').css({'font-weight': '300'});
	}
	if(scrollTop>Top3){
        $('#scrollspylink0').css({'font-weight': '300'});
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '800'});
		$('#scrollspylink4').css({'font-weight': '300'});
		$('#scrollspylink5').css({'font-weight': '300'});
	}
	if(scrollTop>Top4){
        $('#scrollspylink0').css({'font-weight': '300'});
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '300'});
		$('#scrollspylink4').css({'font-weight': '800'});
		$('#scrollspylink5').css({'font-weight': '300'});
	}
	if(scrollTop>Top5){
        $('#scrollspylink0').css({'font-weight': '300'});
		$('#scrollspylink1').css({'font-weight': '300'});
		$('#scrollspylink2').css({'font-weight': '300'});
		$('#scrollspylink3').css({'font-weight': '300'});
		$('#scrollspylink4').css({'font-weight': '300'});
		$('#scrollspylink5').css({'font-weight': '800'});
	}
});
