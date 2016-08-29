$(document).ready(function(){
  var editor = ace.edit("code");
  editor.setTheme("ace/theme/cobalt");
  editor.session.setMode("ace/mode/c_cpp");
  $("button").click(function(){
    var code = editor.getValue();
    $.ajax({
        type: "GET",
        url: "back.php",
        data: {code:code},
        dataType: "html",
        success: function(response){
            var obj = JSON.parse(response);
            $("#errors").html(obj[0]);
            if (obj[1] == "0"){
              $("#errors").css("background-color","#e74c3c");
            }
            else if (obj[1] == "1"){
              $("#errors").css("background-color","#2ecc71");
            }
        }
    });
  });
})
