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

    // Delete all cookies
    function deleteAllCookies(){
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    // Verify
    var user = getCookie("user");
    if (!user){
        alert('No cookie');
        window.open('', '_self', '');
        window.close();
    }

    // Logout
    $('#logout').click(function(){
        deleteAllCookies();
        window.location.replace("admin.html");
    })

});