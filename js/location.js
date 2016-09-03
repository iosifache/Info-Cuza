$(document).ready(function(){
    $.getJSON("http://ip-api.com/json/?", function(data){
        var region = data.region;
        var country = data.countryCode;
        var action = "add";
        $.ajax({
            type: "GET",
            url: "php/location.php",
            dataType: "html",
            data: {action: action, region:region, country: country}
        });
    });
})
