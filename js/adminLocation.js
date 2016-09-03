$(document).ready(function(){

    // Random color
    function arrayConcat(array, j){
        for (i = 0; i < j; i++){
            array = array.concat(array);
        }
        return array;
    }

    $.ajax({
        type: "GET",
        url: "php/getLocation.php",
        dataType: "json",
        success: function(response){

            // Get data
            var names = response[0];
            var numbers = response[1];
            var namesCountry = response[2];
            var numbersCountry = response[3];

            // Set colors
            var colorArray = ["rgba(255, 99, 132, 0.4)","rgba(54, 162, 235, 0.4)","rgba(255, 206, 86, 0.4)","rgba(75, 192, 192, 0.4)","rgba(153, 102, 255, 0.4)","rgba(255, 159, 64, 0.4)"];
            var colorString = arrayConcat(colorArray, 10);
            var colors = JSON.stringify(colorString);

            // Set data and options
            var dataString = '{"type":"bar", "defaultFontSize": 5, "scaleFontSize": 5, "pointLabelFontSize": 5, "data":{"labels":' + names + ',"datasets":[{"label":"Numar de accesari pe judet in RO","data":' + numbers + ',"backgroundColor": ' + colors + '}]},"options":{"scales":{"xAxes":[{"ticks":{"beginAtZero":true, "fontSize": 0}}]}}}';

            // Generate chart
            var ctx = $("#judet");
            var data = JSON.parse(dataString);
            var myChart = new Chart(ctx, data);

            // Set data and options Country
            var dataStringCountry = '{"type":"bar", "defaultFontSize": 5, "scaleFontSize": 5, "pointLabelFontSize": 5, "data":{"labels":' + namesCountry + ',"datasets":[{"label":"Numar de accesari pe tari","data":' + numbersCountry + ',"backgroundColor": ' + colors + '}]},"options":{"scales":{"xAxes":[{"ticks":{"beginAtZero":true, "fontSize": 0}}]}}}';

            // Generate chart Country
            var ctxCountry = $("#tara");
            var dataCountry = JSON.parse(dataStringCountry);
            var myChartCountry = new Chart(ctxCountry, dataCountry);

        }
    });
});
