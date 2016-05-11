$( document ).ready(function(){

    // Verify if target of link is a section of page
    $('a[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            scroll= target.offset().top;
            scroll = scroll + 3;
            if (target.length){
                $('html, body').animate({
                    scrollTop: scroll
                }, 1000);
                return false;
            }
        }
      });

});
