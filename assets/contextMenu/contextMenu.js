/* 

contextMenu - framework CSS+JS ce poate fi folosit, impreuna cu FontAwesome si JQuery, pentru a genera o biblioteca de link-uri utile, activata la click dreapta

Utilizare:
1. Includere CSS
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="contextMenu.css" rel="stylesheet" type="text/css">
2. Includere JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="contextMenu.js"></script>
3. Exemplu cod HTML
<div class="context">
	<ul>
		<a href="link1.html"><li><i class="fa fa-icon1"></i>Link #1</li></a>
		<a href="link2.html"><li><i class="fa fa-icon2"></i>Link #2</li></a>
		<a href="link3.html"><li><i class="fa fa-icon3"></i>Link #3</li></a>
		<a href="link4.html"><li><i class="fa fa-icon4"></i>Link #4</li></a>
	</ul>
</div>

*/

$(document).ready(function(){
	"use strict";
    document.addEventListener('contextmenu', function(e){
		$(".context").css("opacity", "1");
        if ((e.pageY < $(window).width()/2)&&((e.pageX < $(window).height()/2))){
            $(".context").show().css("top", e.pageY + "px");
            $(".context").show().css("left", e.pageX + "px");
        }
        else{
            $(".context").show().css("top", e.pageY + "px");
            $(".context").show().css("left", e.pageX - 180 + "px");
        }
        e.preventDefault();
    }, false);
    document.addEventListener('click', function(e){
    	$(".context").css("opacity","0");
        setTimeout(function(){
            $(".context").hide();
        },250)
    }, false);
    document.addEventListener('mousewheel', function(e){
    	$(".context").css("opacity","0");
        setTimeout(function(){
            $(".context").hide();
        },250)
    }, false);
})