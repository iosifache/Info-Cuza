$(document).ready(function(){

	// Reset
	$('#reset').click(function(){
		$('#name').val("");
		$('#message').val("");
	});

	// Send
	$('#send').click(function(){
		var name = $('#name').val();
		var message = $('#message').val();
		var messageListRef = new Firebase('https://infocuza-contact.firebaseio.com');
		messageListRef.push({'name': name, 'message': message});
		$('#name').val("");
		$('#message').val("");
	});
	
});