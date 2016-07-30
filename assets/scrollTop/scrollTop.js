/*

scrollTop - framework CSS+JS ce poate fi folosit, impreuna cu FontAwesome si JQuery, pentru a realiza butoane de scrolare in partea de sus a paginii web

Utilizare:
1. Includere CSS
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="scrollTop.css" rel="stylesheet" type="text/css">
2. Includere JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="scrollTop.js"></script>
3. Exemplu cod HTML
<a href="#" class="scrollTop">
    <i class="fa fa-caret-square-o-up" aria-hidden="true"></i>
</a>

*/

function requestLoaderShow(){
    $('.scrollTop i').removeClass("fa-caret-square-o-up").addClass("fa-refresh");
    if ($(this).scrollTop()<300){
        $('.scrollTop').fadeIn(400, "linear");
    }
}
function requestLoaderClose(){
    if ($(this).scrollTop()<300){
        $('.scrollTop').fadeOut(400, "linear", function(){
            $('.scrollTop i').removeClass("fa-refresh").addClass("fa-caret-square-o-up");
        });
    }
    else{
        $('.scrollTop i').removeClass("fa-refresh").addClass("fa-caret-square-o-up");
    }
}
$(window).scroll(function(){
	if ($(this).scrollTop()>300){
		$('.scrollTop').fadeIn(400, "linear");
	}
    else{
		$('.scrollTop').fadeOut(400, "linear");
	}
});
$(document).ready(function(){
    $('.scrollTop').click(function(){
        $('html, body').animate({scrollTop:'0'}, 500);
        return false;
    });
});
$(document).ajaxStart(function(){
    requestLoaderShow();
});
$(document).ajaxComplete(function(){
    requestLoaderClose();
});