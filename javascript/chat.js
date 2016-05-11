$(document).ready(function(){

    // Connect to Firebase
    var messagesRef = new Firebase('https://infocuza.firebaseio.com');

    // UI control
    var messageField = $('#messageInput');
    var nameField = $('#nameInput');
    var messageList = $('#example-messages');

    // On Enter, push mesages to Firebase
    messageField.keypress(function(e){
        if (e.keyCode == 13){
        var username = nameField.val();
        var message = messageField.val();
        messagesRef.push({name:username, text:message});
        messageField.val('');
      }
    });

    // Request messages from Firebase
    messagesRef.limitToLast(10).on('child_added', function (snapshot) {
      var data = snapshot.val();
      var username = data.name || "anonymous";
      var message = data.text;
      var messageElement = $("<li>");
      var nameElement = $("<strong class='example-chat-username'></strong>");
      nameElement.text(username + ":");
      messageElement.text(message).prepend(nameElement);
      messageList.append(messageElement);
      messageList[0].scrollTop = messageList[0].scrollHeight;
    });
    
});
