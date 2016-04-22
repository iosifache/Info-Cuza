$(window).load(function(){
    $('#loading').delay(2000).hide(0);
});

$( document ).ready(function(){
	// Random background
	var images = ['pattern_1.png', 'pattern_2.png', 'pattern_3.png', 'pattern_4.png', 'pattern_5.png', 'pattern_6.png', 'pattern_7.png', 'pattern_8.png', 'pattern_9.png', 'pattern_10.png', 'pattern_11.png', 'pattern_12.png'];
	$('.intro').css({'background-image': 'url(image/' + images[Math.floor(Math.random() * images.length)] + ')'});

	// Get variable from link
	function getQueryVariable(variable){
	    var query = window.location.search.substring(1);
	    var vars = query.split("&");
	    for (var i=0;i<vars.length;i++) {
	        var pair = vars[i].split("=");
	        if(pair[0] == variable){return pair[1];}
	    }
	    return(false);
	}
	var name = getQueryVariable("name");
	var lang = getQueryVariable("lang");
	if (lang==""){
		$('<script src="data/'+name+'.js" language="JavaScript" type="text/javascript"></script>').appendTo(document.head);
	}
	else{
		var add = name + '-' + lang;
		$('<script src="data/'+add+'.js" language="JavaScript" type="text/javascript"></script>').appendTo(document.head);
	}

    // Page info insertion
	var template = $('#mustache-render').html();
	var output = Mustache.to_html(template, view);
   	$('#mustache-render').html(output);
	$('#description').after(description);
   	$('#section1').after(one);
   	$('#section2').after(two);
	$('#section3').after(three);
	$('#section4').after(four);
	$('#section5').after(five);

});
