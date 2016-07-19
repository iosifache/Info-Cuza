$(document).ready(function(){

    // Get cookie by name
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++){
            var c = ca[i];
            while (c.charAt(0)==' '){
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0){
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    // Auto-login
    var user = getCookie("user");
    if (user){
        window.location.replace("adminPanel.html");
    }

    // Login form
    $('#login').click(function(){
        var user = $('#user').val();
        var password = $('#password').val();
        $.ajax({
            type: "GET",
            url: "php/admin.php",             
            dataType: "html",    
            data: {user:user, password:password},   
            success: function(response){

                // No account                  
                if (response=="0"){
                    $('#user').css("border-color", "#e74c3c");
                    $('#password').css("border-color", "#e74c3c");
                }

                // Correct data
                if (response=="1"){
                    $('#user').css("border-color", "#2ecc71");
                    $('#password').css("border-color", "#2ecc71");
                    document.cookie = "user=" + user;
                    setTimeout(function(){
                        window.location.replace("adminPanel.html");
                    }, 1000);
                    
                }

                // Incorrect password
                if (response=="2"){
                    $('#user').css("border-color", "#2ecc71");
                    $('#password').css("border-color", "#e74c3c");
                }
            }
        });
    });

});