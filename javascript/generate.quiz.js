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

	/* JQuery UI init */
	var text_one=0;
	var text_two=0;
	$(function(){
		$("#draggable code").draggable({revert: "invalid"});
		$("#draggable").droppable();
		$(".droppable1").droppable({
			drop: function(event, ui) {
				text_one = ui.draggable.text();
			}
		});
		$(".droppable2").droppable({
			drop: function(event, ui) {
				text_two = ui.draggable.text();
			}
		});
	});

	/* Calculate score */
	$("#calc").click(function(){
		var answers = [];
		var i = 0;
		$("ul li input[type=radio]:checked").each(function(){
			answers[i]=$(this).val();
			i++
		});
		$("input[type=text]").each(function(){
			answers[i]=$(this).val();
			i++
		});
		answers[i]=text_one;
		answers[i+1]=text_two;
		correct = view.correct;
		score = 0;
		for(i=0;i<=9;i++){
			if (answers[i]==correct[i]){
				score+=10;
			}
			console.log('Answer/Correct ',i,': ',answers[i],'/',correct[i]);
			console.log('Score: ',score);
		}
		$("#score").text(score);
		messages=view.messages;
		if (score < 50){
			$('#result-message').text(messages[0]);
		}
		else if (score <90){
			$('#result-message').text(messages[1]);
		}
		else{
			$('#result-message').text(messages[2]);
		}
	});

});
