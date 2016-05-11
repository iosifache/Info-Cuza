$(window).load(function(){

    // Wait 1s after load
    $('#loading').delay(1000).hide(0);

});

$(document).ready(function(){

	// Random background
    var images = [];
    for (i=1; i<=249; i++){
        images[i] = 'pattern_' + i.toString() + '.png';
    }
	$(".card #random").each(function(){
		$(this).css({'background-image': 'url(image/patterns/' + images[Math.floor(Math.random() * images.length)] + ')'});
	});

	// Show and hide buttons
	$('#category-all').click(function(){
		$(".card").each(function(){
			$(this).removeAttr('style');
		});
	});
	$('#type-tutorial').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-type");
			if (category == "2"){
				$(this).css({'display':'none'});
			}
			if (category == "1"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#type-quiz').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-type");
			if (category == "1"){
				$(this).css({'display':'none'});
			}
			if (category == "2"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#category-tic').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-category");
			if (category == "1"){
				$(this).css({'display':'none'});
			}
			if (category == "2"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#category-info').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-category");
			if (category=="2"){
				$(this).css({'display':'none'});
			}
			if (category == "1"){
				$(this).removeAttr('style');
			}
		});
	});

});
