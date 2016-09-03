$(document).ready(function(){
    var action = "check";
    $.ajax({
        type: "GET",
        data: {action: action},
        url: "php/animation.php",
        dataType: "html",
        success: function(response){
            if (response==1){
                new WOW().init();
            }
        }
    });
});
