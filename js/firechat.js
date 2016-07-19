$(document).ready(function(){

	// Firebase data
	var chatRef = new Firebase("https://infocuza-chat.firebaseio.com");
	var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

	// Login
	chatRef.onAuth(function(authData){
		if (authData){
			hat.setUser(authData.uid, authData.facebook.displayName);
		} 
		else{
			chatRef.authWithOAuthPopup("facebook", function(error, authData){
				if (error){
					console.log("Login Failed!", error);
				} 
				else{
					console.log("Authenticated successfully with payload:", authData);
				}
			}, 
			{
				remember: "sessionOnly",
				scope: "email,user_likes"
			});
		}
	});

	// Logout
	$('#logout').click(function(){
		chatRef.unauth();
	})

});