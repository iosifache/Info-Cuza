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
	var name = getQueryVariable("name");
	var link = "<script src='data/" +name+ ".js' language='JavaScript' type='text/javascript'></script>";
	$(link).appendTo(document.head);

    // Page info insertion
	var template = $('#mustache-render').html();
	var output = Mustache.to_html(template, view);
   	$('#mustache-render').html(output);
});
