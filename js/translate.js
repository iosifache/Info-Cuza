// Load Google Translate elements
function googleTranslateElementInit(){
	// new google.translate.TranslateElement({pageLanguage: 'ro', includedLanguages: 'ro,en',layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
	new google.translate.TranslateElement({pageLanguage: 'ro', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
}

// Translate modal
$(document).ready(function(){
	$('#language-button').click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('.translate').css("display","block");
	});
	$(".translate i").click(function(){
		$('.translate').css("display","none");
		$('html, body').removeAttr("style");
	});
})
