$(window).load(function(){
    $('#loading').delay(2000).hide(0);
});

$( document ).ready(function(){
    // Random background
    var images = [];
    for (i=1; i<=249; i++){
        images[i] = 'pattern_' + i.toString() + '.png';
    }
	$(".intro").each(function(){
		$(this).css({'background-image': 'url(image/patterns/' + images[Math.floor(Math.random() * images.length)] + ')'});
	});

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
		correct = view.correct; //Corectare
		score = 0;
		for(i=0;i<=9;i++){
			if (answers[i]==correct[i]){
				score+=10;
			}
			console.log('Answer/Correct ',i,': ',answers[i],'/',correct[i]);
			console.log('Score: ',score);
		}
		$("#score").text(score);
		messages=view.messages; //Corectare
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
