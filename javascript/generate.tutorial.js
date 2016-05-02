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
});
