$(document).ready(function(){
    $.getJSON("http://ip-api.com/json/?", function(data){
        region = data.region;
        country = data.countryCode;
        $.ajax({
            type: "GET",
            url: "php/addLocation.php",
            dataType: "html",
            data: {region:region, country: country}
        });
    });
})
