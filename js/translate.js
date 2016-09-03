// Load Google Translate elements
function googleTranslateElementInit(){
	new google.translate.TranslateElement({pageLanguage: 'ro', includedLanguages: 'ro,en',layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
}

// Translate modal
$(document).ready(function(){
	$('#translation li').click(function(){
		var lang = $(this).data('lang');
		var $frame = $('.goog-te-menu-frame:first');
		if (!$frame.size()) {
			alert("Error: Could not find Google translate frame.");
			return false;
		}
		$frame.contents().find('.goog-te-menu2-item span.text:contains('+lang+')').get(0).click();
		return false;
	});
})
