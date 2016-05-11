$(window).load(function(){

    // Wait 1s after load
    $('#loading').delay(1000).hide(0);

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
        var hidded = $("#hidded").html();
        hidded = hidded.replace('&gt;&gt;', '>>');
        hidded = hidded.replace('&lt;&lt;', '<<');
        var correct = JSON.parse(hidded);
		score = 0;
		for(i=0;i<=9;i++){
            if (i>6){
                var str = correct[i];
                correct[i] = str.replace('&gt;&gt;', '>>');
                correct[i] = str.replace('&lt;&lt;', '<<');
            }
			if (answers[i]==correct[i]){
				score+=10;
			}
			console.log('Answer/Correct ',i,': ',answers[i],'/',correct[i]);
			console.log('Score: ', score);
		}
		$("#score").text(score);
        $("#score-modal").css("opacity","1");
        $("#close").click(function(){
            $("#score-modal").css("opacity","0");
        });
		messages = ["Rzultatul tau este sub media elevilor care au rezolvat acest test. Recomandarea noastra este sa recapitulezi acest capitol si sa reincerci sa faci acest quiz. Iti promitem ca data viitoare rezultatul tau va fi unul incurajator!", "Rezultatul tau se incadreaza in media elevilor care au terminat acest quiz. Iti recomandam sa fii mai atent data viitore!", "Rezultatul tau este onorabil! Iti recomandam sa iti pastrezi entuziasmul in a invata tainele informaticii si, daca ai placerea, sa ii ajuti pe colegii tai cu scor mai mic decat al tau. Bafta pe data viitoare!"];
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
