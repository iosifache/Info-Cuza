$(document).ready(function(){

    // Extract URL parameter function
    var id = urlParam('id');

    function init(){

        scrollspy(["#descriereProblema", "#descriereInput", "#descriereOutput", "#precizari", "#compiler"]);

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

        // Like
        $('#like').click(function(){
            $.ajax({
                type: "GET",
                url: "php/like.php",
                dataType: "html",
                data: {id:id},
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
        url: "php/problem.php",
        dataType: "html",
        data: {id:id},
        success: function(response){
            $(".nav-mobile-list").after(response);
            init();
        }
    });

});
