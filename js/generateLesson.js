$(document).ready(function(){

    // Extract URL parameter function
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }
    var id = $.urlParam('id');
    var lang = $.urlParam('lang');

    function init(){

        // Remove empty sections
        $('.scrollspy a li div').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                $this.parent().css("display", "none");
        });
        $('h2').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                $this.css("display", "none");
        });

	   // Export to PDF
		var doc = new jsPDF();
    	$('#export-pdf').click(function(){
    		doc.fromHTML($('.markdown-body').html(), 10, 10,{
           		'width': 185
        	});
            docName = "Lectie" + lang.toString() + "_" +id.toString() + ".pdf";
        	doc.save(docName);
    	});

        // Like
        $('#like').click(function(){
            $.ajax({
                type: "GET",
                url: "php/like.php",
                dataType: "html",
                data: {id:id, lang:lang},
                success: function(response_like){
                    $('#like').addClass("disable");
                }
            });
        });

        // Smooth scroll
        $('a[href*="#"]:not([href="#"])').click(function(){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length){
                    var scrollAmount = target.offset().top + 3;
                    $('html, body').animate({
                        scrollTop: scrollAmount
                    }, 1000);
                 return false;
                }
            }
        });

    }

    // Generate
    $.ajax({
        type: "GET",
        url: "php/lesson.php",
        dataType: "html",
        data: {id:id, lang:lang},
        success: function(response){
            $(".nav-mobile-list").after(response); 
            init();
        }
    });

});