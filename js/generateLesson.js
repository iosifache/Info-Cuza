$(document).ready(function(){

    // Extract URL parameter function
    var id = urlParam('id');
    var lang = urlParam('lang');

    function init(){

        scrollspy(["#intro", "#section1", "#section2", "#section3", "#section4", "#section5", "#aplicare", "#exercitii", "#felicitari"]);

        // Remove empty sections and empty scrollspy bullets
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
        smoothScroll();

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