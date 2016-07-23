$(document).ready(function(){

    // Verify
    var user = getCookie("user");
    if (!user){
        window.location.replace("403.html");
    }

    // Logout
    $('#logout').click(function(){
        deleteAllCookies();
        window.location.replace("admin.html");
    })

});