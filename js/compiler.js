$(document).ready(function(){

    // Score modal
    function modal_launch(){
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('.try-modal').css("display", "block");
        $(".try-modal-close").click(function(){
            location.reload();
        })
    }

  var editor = ace.edit("code");
  var editorInput = ace.edit("input");
  var editorOutput = ace.edit("output");
  editor.setTheme("ace/theme/cobalt");
  editorInput.setTheme("ace/theme/chaos");
  editorOutput.setTheme("ace/theme/vibrant_ink");
  editor.session.setMode("ace/mode/c_cpp");
  editorInput.session.setMode("ace/mode/plain_text");
  editorOutput.session.setMode("ace/mode/plain_text");
  editor.setShowPrintMargin(false);
  editorInput.setShowPrintMargin(false);
  editorOutput.setShowPrintMargin(false);
  editor.on("input", function() {
      $("#characters").html("Numar de caractere: " + editor.session.getValue().length);
  });
  $("#cppButton").click(function(){
      editor.session.setMode("ace/mode/c_cpp");
  });
  $("#pascalButton").click(function(){
      editor.session.setMode("ace/mode/pascal");
  });
  var language = 13;
  $("#submit").click(function(){
    var code = editor.getValue();
    var input = editorInput.getValue();
    if ($("[name='language']:checked").val() == "cpp"){
      language = 13;
    }
    else if ($("[name='language']:checked").val() == "pascal"){
      language = 52;
    }
    $.ajax({
        url: 'php/compiler.php',
        type: 'GET',
        data: {
          "sourceCode": code,
          "langId": language,
          "stdin": input
        },
        dataType: "json",
        success: function (response){
          switch (response["status"]){
            case "0":
              $("#status").html("Status: <b>OK</b>");
              break;
            case "1":
              $("#status").html("Status: <b>Se asteapta compilarea</b>");
              break;
            case "2":
              $("#status").html("Status: <b>Se compileaza</b>");
              break;
            case "3":
              $("#status").html("Status: <b>Se  ruleaza</b>");
              break;
          }
          switch (response["result"]){
            case "11":
              $("#rezultat").html("Rezultat: <b>Eroare la compilare</b>");
              break;
            case "12":
              $("#rezultat").html("Rezultat: <b>Eroare runtime</b>");
              break;
            case "13":
              $("#rezultat").html("Rezultat: <b>Depasire a limitei de timp</b>");
              break;
            case "15":
              $("#rezultat").html("Rezultat: <b>Succes</b>");
              break;
            case "17":
              $("#rezultat").html("Rezultat: <b>Depasire a limitei de timp</b>");
              break;
            case "19":
              $("#rezultat").html("Rezultat: <b>Chemare ilegala a sistemului</b>");
              break;
            case "20":
              $("#rezultat").html("Rezultat: <b>Eroare interna</b>");
              break;
          }
          if (response["any_cmperr"]==true){
            editorOutput.setValue(response["cmperr"], 1);
            $("#timp").html("Timp executare: <b> - secunde</b>");
            $("#memorie").html("Memorie: <b> - kilobytes</b>");
          }
          else{
            editorOutput.setValue(response["stdout"], 1);
            $("#timp").html("Timp executare: <b>" + response["time"] + " secunde</b>");
            $("#memorie").html("Memorie: <b>" + response["memory"] + " bytes</b>");
          }
        }
    });
  });

  // Problem
  $('#score').click(function(){
      var id = urlParam('id');
      var code = editor.getValue();
      if ($("[name='language']:checked").val() == "cpp"){
        language = 13;
      }
      else if ($("[name='language']:checked").val() == "pascal"){
        language = 52;
      }
      $.ajax({
          url: 'php/testProblem.php',
          type: 'GET',
          data: {
            "sourceCode": code,
            "langId": language,
            "id": id
          },
          dataType: "json",
          success: function (response){
              $("#testeCorecte").append(response[0]);
              $("#testeFacute").append(response[1]);
              if (response[2]==1){
                  $("#score-text").append("<br><br><p><i class='fa fa-clock-o'></i> Programul tau nu a depasit limita de timp.</p>");
              }
              else if (response[2]==0){
                  $("#score-text").append("<br><br><p><i class='fa fa-clock-o'></i> Din pacate, ai depasit limita de timp.</p>");
              }
              if (response[3]==1){
                  $("#score-text").append("<p><i class='fa fa-folder'></i> Programul tau nu a depasit limita de spatiu.<p>");
              }
              else if (response[3]==0){
                  $("#score-text").append("<p><i class='fa fa-folder'></i> Din pacate, ai depasit limita de spatiu.<p>");
              }
              modal_launch();
          }
      });
  });
})
