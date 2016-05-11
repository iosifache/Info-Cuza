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

    // Export to PDF
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    $('#export').click(function () {
        doc.fromHTML($('.markdown-body').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('export.pdf');
    });
    
});
