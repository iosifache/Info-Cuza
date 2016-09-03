$(document).ready(function(){

    // Disable right click
    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
    }, false);

    // Enable and disable tooltip
    function enableMentor(){
        $("#page-mentor").css("display", "block");
    }
    function disableMentor(){
        $("#page-mentor").css("display", "none");
    }

    // Show and hide tooltip
    function showTooltip(timer){
        setTimeout(function(){
            $(".tooltip").css("opacity", "1");
        }, timer);
    }
    function hideTooltip(timer){
        setTimeout(function(){
            $(".tooltip").removeAttr('style');
        }, timer);
    }

    // Change tooltip text source
    function changeTooltip(name){
        $("#adminTooltip").css("display","none");
        $("#chatTooltip").css("display","none");
        $("#compilerTooltip").css("display","none");
        $("#indexTooltip").css("display","none");
        $("#lectieTooltip").css("display","none");
        $("#materialeTooltip").css("display","none");
        $("#problemaTooltip").css("display","none");
        $("#testTooltip").css("display","none");
        $("#" + name).css("display","block");
    }

    // Change tooltip in case of pages
    $(".childFrame").load(function(){
        setTimeout(function(){

            // Get frame page
            var url = document.getElementById("childFrame").contentWindow.location.href;
            var filenameOriginal = url.substring(url.lastIndexOf('/')+1);
            var filename = filenameOriginal.split("?")[0];

            // Scenario
            switch (filename){
                case "403.html":
                    disableMentor()
                    break;
                case "404.html":
                    disableMentor()
                    break;
                case "admin.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("adminTooltip");
                    hideTooltip(5000);
                    break;
                case "chat.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("chatTooltip");
                    hideTooltip(5000);
                    break;
                case "compiler.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("compilerTooltip");
                    hideTooltip(5000);
                    break;
                case "index.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("indexTooltip");
                    hideTooltip(5000);
                    break;
                case "lectie.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("lectieTooltip");
                    hideTooltip(5000);
                    break;
                case "materiale.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("materialeTooltip");
                    hideTooltip(5000);
                    break;
                case "problema.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("problemaTooltip");
                    hideTooltip(5000);
                    break;
                case "test.html":
                    enableMentor();
                    showTooltip(2500);
                    changeTooltip("testTooltip");
                    hideTooltip(5000);
                    break;
            }

        }, 1);
    });

    // Note plugin
    var note = getCookie("note");
    if (!note){
        $("textarea").val("");
    }
    else{
        $("textarea").val(note);
    }
    var clicks=0;
    $(".button").click(function(){
        if (clicks%2==0){
            $(".notePlugin").css("margin-left", "0");
            clicks++;
        }
        else if (clicks%2==1){
            $(".notePlugin").removeAttr('style');
            clicks++;
        }
    });
    $("textarea").keyup(function(){
        note = $("textarea").val();
        document.cookie = "note=" + note;
    });

});
