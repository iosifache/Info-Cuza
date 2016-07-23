/* 

loader - framework CSS+JS ce poate fi folosit, impreuna cu FontAwesome si JQuery, pentru a genera loader pentru pagini web

Obs: Functii utile:
1.loader_launch() - activeaza modal-ul cu loader
2.loader_init(timer) - inchide modal-ul cu loader doar dupa trecerea a minim (timer)ms de la incarcarea completa a paginii
3.loader_hide() - inchide modal-ul cu loader dupa trecerea a (timer)ms de la chemarea functiei
Obs: Functiile pot fi customisate prin schimbarea variabilei timer. Initial, loader-ul este setat sa se inchida dupa 2s.

Utilizare:
1. Includere CSS
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="loader.css" rel="stylesheet" type="text/css">
2. Includere JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="loader.js"></script>
3. Exemplu cod HTML
<script>
	$('html, body').css({'overflow': 'hidden', 'height': '100%'});
</script>
<div class="loader">
	<div class="vertical-center">
		<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
	</div>
</div>

*/

function loader_launch(){
	$('.loader').css("display","block");
}
function loader_init_hide(timer){
	var start = new Date();
	$(window).load(function(){
		var load = new Date() - start;
		if (load < timer){
			var wait = timer- load;
			setTimeout(function(){ 
				$('.loader').css("display","none");
			}, wait);
		}
	});
}
function loader_hide(timer){
	setTimeout(function(){ 
		$('.loader').css("display","none");
		$('html, body').removeAttr("style");
	}, timer);
}
loader_hide(2000);