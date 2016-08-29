/* 
    
scrollspy - framework CSS+JS ce poate fi folosit, impreuna cu JQuery, pentru a genera meniuri tip scrollspy pentru paginile web

Obs: Acst meniu poseda link-uri ce conduc la categorii. Pentru un efect estetic mai bun, se recomanda implementarea cu smoothScroll.
Obs: Cand user-ul scroleaza pana in partea de jos a paginii, unele sectiuni pot avea inaltimi mici, astfel nefiind evidentiate in scrollspy. Aceast bug se poate rezolva prin plasarea in ultimul element a unui div cu clasa "last-pixel".

Utilizare:
1. Includere CSS
<link href="scrollspy.css" rel="stylesheet" type="text/css">
2. Inludere JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="scrollspy.js"></script>
3. Exemplu cod HTML
<ul class='scrollspy'>
<a href='#sectiune1'><li><div>Sectiune #1</div></li></a>
<a href='#sectiune2'><li><div>Sectiune #2</div></li></a>
<a href='#sectiune3'><li><div>Sectiune #3</div></li></a>
<div id="sectiune1"></div>
<div id="sectiune2"></div>
<div id="sectiune3"></div>
</ul>
<div class="last-pixel"></div>
<script>
    scrollspy(["#sectiune1","#sectiune2","#sectiune3"]);
</script>

*/

$.fn.isVisible = function(){
    var rect = this[0].getBoundingClientRect();
    return((rect.height > 0 || rect.width > 0) && rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
};
function scrollspy(array){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>360){
            $('.scrollspy').css({ 'position': 'fixed', 'top' : '0'});
        }
        else{
            $('.scrollspy').css({ 'position': 'absolute', 'top': '360px'});
        }
        var j, maxIndex = 0;
        var sections = array;
        var sectionTop = [];
        $.each(sections,function(index, value){
            sectionTop[index] = $(value).offset().top;
            j++;
        });
        $(sectionTop).each(function(index, value){
            if(scrollTop>sectionTop[index]){
                maxIndex = index;
            }
        });
        $('.scrollspy li').css({'opacity': '.3'});
        $('.scrollspy li:eq(' + maxIndex + ')').css({'opacity': '1'});
        if (($('.last-pixel').isVisible())&&(maxIndex<array.length)){
            for (i=maxIndex+1; i<array.length; i++){
                $('.scrollspy li:eq(' + i + ')').css({'opacity': '1'});
            }
        }
    });  
}