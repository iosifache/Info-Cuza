/*

smoothScroll - framework JS folosita pentru a realiza o scrolare automata usoara pentru link-urile interne

Obs: Daca pagina necesita request-uri AJAX pentru preluarea continutului, se va folosi functia smoothScroll(), ce va fi chemata in sectiunea "success" a request-ului.

Utilizare:
1. Includere JS
<script src="js/smoothScroll.js"></script>
2. Exemplu cod HTML
<a href="#section">View content</a>
<div id="section">Content here</div>

*/

function smoothScroll(){
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
$(document).ready(function(){
   smoothScroll();
})