$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "php/animationCheck.php",
        dataType: "html",
        success: function(response){
            if (response==1){
                new WOW().init();
            }
        }
    });
});