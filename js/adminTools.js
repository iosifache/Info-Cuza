// Zerofill
function zerofill(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}


// Refresh material
function refreshMaterial(){ 
    $.ajax({
        type: "GET",
        url: "php/adminList.php", 
        success: function(response){
            $('#tab-2').html(response);
            initList();
        }
    });
}

function initList(){

    // Delete material
    $('p.delete').click(function(){
        var id = $(this).parent().parent().data("id");
        var tip = $(this).parent().parent().data("tip");
        $.ajax({
            type: "GET",
            url: "php/adminDelete.php",  
            data: {id:id, tip:tip},            
            dataType: "html",   
            success: function(response){
                refreshMaterial();
            }
        });
    });

    // Reset contors
    $('p.reset').click(function(){
        var id = $(this).parent().parent().data("id");
        $.ajax({
            type: "GET",
            url: "php/adminContors.php",  
            data: {id:id},             
            dataType: "html",   
            success: function(response){
                refreshMaterial();
            }
        });
    });

    $('p.edit').click(function(){
        var id = $(this).parent().parent().data("id");
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $('#tab-3').addClass('current');
        $('ul.tabs li[data-tab=tab-3]').addClass('current');
        $.ajax({
            type: "GET",
            url: "php/adminEditTake.php",  
            data: {id:id},             
            dataType: "html",   
            success: function(response){
                // $('#id').val(zerofill(response, 6));
                console.log(response);
            }
        });
    });

}

function initEdit(){

    // Get max ID
    $.ajax({
        type: "GET",
        url: "php/adminGetMaxID.php", 
        success: function(response){
            $('#id').val(zerofill(response, 6));
        }
    });

    // Get date
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (day<10){
        day = "0" + day;
    }
    if (month<10){
        month = "0" + month;
    }
    $("#date").val(year + "-" + month + "-" + day);

    // Add by type
    $("#tip").keyup(function(event){
        if (($("#tip").val()=="Lectie")||($("#tip").val()=="lectie")){

            // Append elements
            $("#added").html("<p class='label'>Introducere</p><textarea id='introducere'></textarea><p class='label'>Nume sectiune #1</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_1'><p class='label'>Nume sectiune #2</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_2'><p class='label'>Nume sectiune #3</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_3'><p class='label'>Nume sectiune #4</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_4'><p class='label'>Nume sectiune #5</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_5'><p class='label'>Sectiune #1</p><textarea id='sectiune_1'></textarea><p class='label'>Sectiune #2</p><textarea id='sectiune_2'></textarea><p class='label'>Sectiune #3</p><textarea id='sectiune_3'></textarea><p class='label'>Sectiune #4</p><textarea id='sectiune_4'></textarea><p class='label'>Sectiune #5</p><textarea id='sectiune_5'></textarea><p class='label'>Aplicare</p><textarea id='aplicare'></textarea><p class='label'>Exercitii</p><textarea id='exercitii'></textarea><p class='label'>Felicitari</p><textarea id='felicitari'></textarea><button class='publica' id='publica_test'>Publica!</button>");
 
            // TinyMCE init
            var sections = ["#introducere", "#sectiune_1", "#sectiune_2", "#sectiune_3", "#sectiune_4", "#sectiune_5", "#aplicare", "#exercitii", "#felicitari"];
            $.each(sections,function(index, value){
                tinymce.init({
                    selector: "textarea" + sections,
                    language_url : 'js/ro.js',
                    content_css : 'https://guides.github.com/components/primer/markdown.css',
                    resize: false,
                    plugins:[
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                });
            });

            // Add lesson
            $('button#publica_test').click(function(){
                var id = $('#tab-4 #id').val();
                var date = $('#tab-4 #date').val();
                var title = $('#tab-4 #title').val();
                var description = $('#tab-4 #description').val();
                var tip = $('#tab-4 #tip').val();
                var lang = $('#tab-4 #lang').val();
                var nume_sectiune_1 = $('#tab-4 #nume_sectiune_1').val();
                var nume_sectiune_2 = $('#tab-4 #nume_sectiune_2').val();
                var nume_sectiune_3 = $('#tab-4 #nume_sectiune_3').val();
                var nume_sectiune_4 = $('#tab-4 #nume_sectiune_4').val();
                var nume_sectiune_5 = $('#tab-4 #nume_sectiune_5').val();
                var introducere = tinyMCE.get('introducere').getContent({format : 'raw'});
                var sectiune_1 = tinyMCE.get('sectiune_1').getContent({format : 'raw'});
                var sectiune_2 = tinyMCE.get('sectiune_2').getContent({format : 'raw'});
                var sectiune_3 = tinyMCE.get('sectiune_3').getContent({format : 'raw'});
                var sectiune_4 = tinyMCE.get('sectiune_4').getContent({format : 'raw'});
                var sectiune_5 = tinyMCE.get('sectiune_5').getContent({format : 'raw'});
                var aplicare = tinyMCE.get('aplicare').getContent({format : 'raw'});
                var exercitii = tinyMCE.get('exercitii').getContent({format : 'raw'});
                var felicitari = tinyMCE.get('felicitari').getContent({format : 'raw'});
                $.ajax({
                    type: "GET",
                    url: "php/adminAddLesson.php",  
                    data: {id: id, date: date, title: title, description: description, tip: tip, lang: lang, introducere: introducere, nume_sectiune_1: nume_sectiune_1, nume_sectiune_2: nume_sectiune_2, nume_sectiune_3: nume_sectiune_3, nume_sectiune_4: nume_sectiune_4, nume_sectiune_5: nume_sectiune_5, sectiune_1: sectiune_1, sectiune_2: sectiune_2, sectiune_3: sectiune_3, sectiune_4: sectiune_4, sectiune_5: sectiune_5, aplicare: aplicare, exercitii: exercitii, felicitari: felicitari},             
                    dataType: "html",   
                    success: function(response){
                        console.log(response);
                    }
                });
            });

        }

        if (($("#tip").val()=="Test")||($("#tip").val()=="test")){

            // Append elements
            $("#added").html("<p class='label'>Intrebare #1</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_1' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_1' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_1' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_1' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_1' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #2</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_2' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_2' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_2' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_2' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_2' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #3</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_3' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_3' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_3' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_3' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_3' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #4</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_4' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_4' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_4' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_4' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_4' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #5</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_5' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_5' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_5' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_5' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_5' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Output #1</p><input type='text' autocomplete='off' spellcheck='false' id='output_1' placeholder='Enunt'><textarea id='code_output_1'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_6' placeholder='Raspuns corect'><p class='label'>Output #2</p><input type='text' autocomplete='off' spellcheck='false' id='output_2' placeholder='Enunt'><textarea id='code_output_2'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_7' placeholder='Raspuns corect'><p class='label'>Output #3</p><input type='text' autocomplete='off' spellcheck='false' id='output_3' placeholder='Enunt'><textarea id='code_output_3'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_8' placeholder='Raspuns corect'><p class='label'>Drag and drop</p><input type='text' autocomplete='off' spellcheck='false' id='drag' placeholder='Enunt'><textarea id='code_drag'></textarea><textarea id='code_var'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_9' placeholder='Raspuns corect #1'><input type='text' autocomplete='off' spellcheck='false' id='corect_10' placeholder='Raspuns corect #2'><button class='publica' id='publica_test'>Publica</button>");            

            // TinyMCE init
            var sections = ["#code_output_1", "#code_output_2", "#code_output_3", "#sectiune_3", "#code_drag", "#code_var"];
            $.each(sections,function(index, value){
                tinymce.init({
                    selector: "textarea" + sections,
                    language_url : 'js/ro.js',
                    content_css : 'https://guides.github.com/components/primer/markdown.css',
                    resize: false,
                    plugins:[
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                });
            });

            // Add lesson
            $('button#publica_test').click(function(){
                var id = $('#tab-4 #id').val();
                var date = $('#tab-4 #date').val();
                var title = $('#tab-4 #title').val();
                var description = $('#tab-4 #description').val();
                var tip = $('#tab-4 #tip').val();
                var lang = $('#tab-4 #lang').val();
                var intrebare_1 = $('#tab-4  #intrebare_1').val();
                var raspuns_1_intrebare_1 = $('#tab-4 #raspuns_1_intrebare_1').val();
                var raspuns_2_intrebare_1 = $('#tab-4 #raspuns_2_intrebare_1').val();
                var raspuns_3_intrebare_1 = $('#tab-4 #raspuns_3_intrebare_1').val();
                var intrebare_2 = $('#tab-4 #intrebare_2').val();
                var raspuns_1_intrebare_2 = $('#tab-4 #raspuns_1_intrebare_2').val();
                var raspuns_2_intrebare_2 = $('#tab-4 #raspuns_2_intrebare_2').val();
                var raspuns_3_intrebare_2 = $('#tab-4 #raspuns_3_intrebare_2').val();
                var intrebare_3 = $('#tab-4 #intrebare_3').val();
                var raspuns_1_intrebare_3 = $('#tab-4 #raspuns_1_intrebare_3').val();
                var raspuns_2_intrebare_3 = $('#tab-4 #raspuns_2_intrebare_3').val();
                var raspuns_3_intrebare_3 = $('#tab-4 #raspuns_3_intrebare_3').val();
                var intrebare_4 = $('#tab-4 #intrebare_4').val();
                var raspuns_1_intrebare_4 = $('#tab-4 #raspuns_1_intrebare_4').val();
                var raspuns_2_intrebare_4 = $('#tab-4 #raspuns_2_intrebare_4').val();
                var raspuns_3_intrebare_4 = $('#tab-4 #raspuns_3_intrebare_4').val();
                var intrebare_5 = $('#tab-4 #intrebare_5').val();
                var raspuns_1_intrebare_5 = $('#tab-4 #raspuns_1_intrebare_5').val();
                var raspuns_2_intrebare_5 = $('#tab-4 #raspuns_2_intrebare_5').val();
                var raspuns_3_intrebare_5 = $('#tab-4 #raspuns_3_intrebare_5').val();
                var output_1 = $('#tab-4 #output_1').val();
                var code_output_1 = tinyMCE.get('code_output_1').getContent({format : 'raw'});
                var output_2 = $('#tab-4 #output_2').val();
                var code_output_2 = tinyMCE.get('code_output_2').getContent({format : 'raw'});
                var output_3 = $('#tab-4 #output_3').val();
                var code_output_3 = tinyMCE.get('code_output_3').getContent({format : 'raw'});
                var drag = $('#tab-4 #drag').val();
                var code_drag = tinyMCE.get('code_drag').getContent({format : 'raw'});
                var code_var = tinyMCE.get('code_var').getContent({format : 'raw'});
                var correct = [];
                for (i=1;i<=10; i++){
                    correct.push($("#corect_" + i).val());
                }
                $.ajax({
                    type: "GET",
                    url: "php/adminAddTest.php",  
                    data: {id: id, date: date, title: title, description :description, tip: tip, lang: lang, intrebare_1: intrebare_1, raspuns_1_intrebare_1: raspuns_1_intrebare_1, raspuns_2_intrebare_1: raspuns_2_intrebare_1, raspuns_3_intrebare_1: raspuns_3_intrebare_1, intrebare_2: intrebare_2, raspuns_1_intrebare_2: raspuns_1_intrebare_2, raspuns_2_intrebare_2: raspuns_2_intrebare_2, raspuns_3_intrebare_2: raspuns_3_intrebare_2, intrebare_3: intrebare_3, raspuns_1_intrebare_3: raspuns_1_intrebare_3, raspuns_2_intrebare_3: raspuns_2_intrebare_3, raspuns_3_intrebare_3: raspuns_3_intrebare_3, intrebare_4: intrebare_4, raspuns_1_intrebare_4: raspuns_1_intrebare_4, raspuns_2_intrebare_4: raspuns_2_intrebare_4, raspuns_3_intrebare_4: raspuns_3_intrebare_4, intrebare_5: intrebare_5, raspuns_1_intrebare_5: raspuns_1_intrebare_5, raspuns_2_intrebare_5: raspuns_2_intrebare_5, raspuns_3_intrebare_5: raspuns_3_intrebare_5, output_1: output_1, code_output_1: code_output_1, output_2: output_2, code_output_2: code_output_2, output_3: output_3, code_output_3: code_output_3, drag: drag, code_drag: code_drag, code_var: code_var, correct: correct},             
                    dataType: "html",   
                    success: function(response){
                        console.log(response);
                    }
                });
            });

        }

    });

}

$(document).ready(function(){

    // Get statistics
    $.ajax({
        type: "GET",
        url: "php/adminStatistics.php", 
        success: function(response){
            var responses = jQuery.parseJSON(response);
            $("#total_materiale").html(responses[0]);
            $("#total_lectii").html(responses[1]);
            $("#total_teste").html(responses[2]);
            $("#max_id").html(responses[3]);
            $("#min_view").html(responses[4]);
            $("#max_view").html(responses[5]);
            $("#min_like").html(responses[6]);
            $("#max_like").html(responses[7]);
            $("#min_age").html(responses[8]);
        }
    });

    // Get material list
    $('li.tab-link[data-tab=tab-2]').click(function(){
        $.ajax({
            type: "GET",
            url: "php/adminList.php", 
            success: function(response){
                $('#tab-2').html(response);
                initList();
            }
        });
    });


    // Get material list
    $('li.tab-link[data-tab=tab-4]').click(function(){
        initEdit();
    });
    
});