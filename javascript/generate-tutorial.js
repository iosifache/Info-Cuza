$( document ).ready(function(){
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
	name = getQueryVariable("name");
	$('<script src="data/'+name+'.js" language="JavaScript" type="text/javascript"></script>').appendTo(document.head)

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
