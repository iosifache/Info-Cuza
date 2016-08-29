$(document).ready(function(){

    // Score modal
    function modal_launch(){
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('.try-modal').css("display", "block");
        $(".try-modal-close").click(function(){
            location.reload();
        })
    }

    // Extract URL parameter function
    var id = urlParam('id');
    var lang = urlParam('lang');

    function init(){

        scrollspy(["#multiple", "#output", "#drag", "#termina"]);

        // Remove empty scrollspy bullet
        $('.scrollspy a li div').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                $this.parent().css("display", "none");
        });

        // Like
        $('#like').click(function(){
            $.ajax({
                type: "GET",
                url: "php/like.php",
                dataType: "html",
                data: {id:id, lang:lang},
                success: function(response_like){
                    $('#like').addClass("disable");
                }
            });
        });

        // JQuery UI
        var text_one=0;
        var text_two=0;
        $(function(){
            $("#draggable code").draggable({revert: "invalid"});
            $("#draggable").droppable();
            $(".droppable1").droppable({
                drop: function(event, ui){
                    text_one = ui.draggable.text();
                }
            });
            $(".droppable2").droppable({
                drop: function(event, ui){
                    text_two = ui.draggable.text();
                }
            });
        });

        // Calculate score
        $("#termina").click(function(){
            var answers = [];
            var i, score = 0;
            var uncompleted = 0;
            for(i=1;i<=5;i++){
                answers.push($("ul li input[type=radio][name='"+i+"']:checked").val());
            }
            $("input[type=text]").each(function(){
                answers.push($(this).val());
            });
            answers[8]=text_one;
            answers[9]=text_two;
            for(i=0;i<=9;i++){
                if ((i>=5)&&(i<=7)&&(/[a-z]/i.test(correct[i]))){
                    if (answers[i]){
                        var lev = Levenshtein(answers[i], correct[i]);
                        if (lev<4){
                            score+=(3-lev)/3*10;
                        }
                    }
                }
                else if (answers[i]==correct[i]){
                    score+=10;
                }
                console.log(i + ": " + answers[i] + "/" + correct[i]);
            }
            score = score.toFixed(2);
            $("#score").text(score);
            messages = ["Rezultatul tau este sub media elevilor care au rezolvat acest test. Recomandarea noastra este sa recapitulezi acest capitol si sa reincerci sa faci acest quiz. Iti promitem ca data viitoare rezultatul tau va fi unul incurajator!", "Rezultatul tau se incadreaza in media elevilor care au terminat acest quiz. Iti recomandam sa fii mai atent data viitore!", "Rezultatul tau este onorabil! Iti recomandam sa iti pastrezi entuziasmul in a invata tainele informaticii si, daca ai placerea, sa ii ajuti pe colegii tai cu scor mai mic decat al tau. Bafta pe data viitoare!"];
            if (score < 50){
                $('#result-message').text(messages[0]);
            }
            else if (score <90){
                $('#result-message').text(messages[1]);
            }
            else{
                $('#result-message').text(messages[2]);
            }
            modal_launch();
        });

        // Smooth scroll
        smoothScroll();

    }

    // Generate
    var correct;
    $.ajax({
        type: "GET",
        url: "php/test.php",
        dataType: "html",
        data: {id:id, lang:lang},
        success: function(response){
            obj = JSON.parse(response);
            console.log(obj);
            $(".nav-mobile-list").after(obj[1]);
            correct = JSON.parse(obj[2]);
            console.log(correct);
            init();
        }
    });

});
