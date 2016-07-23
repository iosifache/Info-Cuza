/* 

tabs - framework CSS+JS ce poate fi folosit, impreuna cu JQuery, pentru a genera tab-uri in paginile web.

Utilizare:
1. Includere CSS
<link href="tabs.css" rel="stylesheet" type="text/css">
2. Includere JS
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="tabs.js"></script>
3. Exemplu cod HTML
<ul class="tabs">
	<li class="tab-link current" data-tab="tab-0">General</li>
		<li class="tab-link" data-tab="tab-1">Listare</li>
		<li class="tab-link no-event" data-tab="tab-2">Editare</li>
		<li class="tab-link" data-tab="tab-3">Adaugare</li>
		<li class="tab-link" data-tab="tab-4">Alte date</li>
	</ul>
<div id="tab-0" class="tab-content current"></div>
<div id="tab-1" class="tab-content"></div>
<div id="tab-2" class="tab-content"></div>
<div id="tab-3" class="tab-content"></div>
<div id="tab-4" class="tab-content"></div>
	
*/

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})
})