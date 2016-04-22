$(window).load(function(){
    $('#loading').delay(2000).hide(0);
});

$(document).ready(function(){
	// Moustache render
	var template = $('#mustache-render').html();
	var output = Mustache.to_html(template, view);
   	$('#mustache-render').html(output);

	// Random background
	var images = ['pattern_1.png', 'pattern_2.png', 'pattern_3.png', 'pattern_4.png', 'pattern_5.png', 'pattern_6.png', 'pattern_7.png', 'pattern_8.png', 'pattern_9.png', 'pattern_10.png', 'pattern_11.png', 'pattern_12.png'];
	$(".card #random").each(function(){
		$(this).css({'background-image': 'url(image/' + images[Math.floor(Math.random() * images.length)] + ')'});
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
			if (category == "quiz"){
				$(this).css({'display':'none'});
			}
			if (category == "tutorial"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#type-quiz').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-type");
			if (category == "tutorial"){
				$(this).css({'display':'none'});
			}
			if (category == "quiz"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#category-tic').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-category");
			if (category == "info"){
				$(this).css({'display':'none'});
			}
			if (category == "tic"){
				$(this).removeAttr('style');
			}
		});
	});
	$('#category-info').click(function(){
		$(".card").each(function(){
			var category = $(this).attr("data-category");
			if (category=="tic"){
				$(this).css({'display':'none'});
			}
			if (category == "info"){
				$(this).removeAttr('style');
			}
		});
	});

});
