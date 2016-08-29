// Refresh material
function refreshMaterial(){ 
    $.ajax({
        type: "GET",
        url: "php/adminList.php",
        success: function(response){
            $('#tab-1').html(response);
            initList();
        }
    });
}

// Move to materils tab
function moveToMaterial(){
    initList();
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $('#tab-1').addClass('current');
    $('ul.tabs li[data-tab=tab-1]').addClass('current');
}

function initGeneral(){

    // Get statistics
    $.ajax({
        type: "GET",
        url: "php/adminStatistics.php",
        success: function(response){
            var responses = jQuery.parseJSON(response);
            $(".admin-statistics-list #total_materiale").html(responses[0]);
            $(".admin-statistics-list #total_lectii").html(responses[1]);
            $(".admin-statistics-list #total_teste").html(responses[2]);
            $(".admin-statistics-list #max_id").html(responses[3]);
            $(".admin-statistics-list #min_view").html(responses[4]);
            $(".admin-statistics-list #max_view").html(responses[5]);
            $(".admin-statistics-list #min_like").html(responses[6]);
            $(".admin-statistics-list #max_like").html(responses[7]);
            $(".admin-statistics-list #min_age").html(responses[8]);
            $(".admin-statistics-list #total_admini").html(responses[9]);
            $(".admin-statistics-list #max_age").html(responses[10]);
        }
    });

    // Add new admin
    $('button#adauga_admin').click(function(){
        var email = $('#tab-0 #admin_email').val();
        var password = $('#tab-0 #admin_password').val();
        $.ajax({
            type: "GET",
            url: "php/adminAddAdmin.php",
            data: {email: email, password: password},
            dataType: "html",
            success: function(response){
                if (response=="2"){
                    $('#tab-0 #admin_email').css("border-color", "#e74c3c");
                    $('#tab-0 #admin_password').css("border-color", "#e74c3c");
                }
                if (response=="1"){
                    $('#tab-0 #admin_email').css("border-color", "#2ecc71");
                    $('#tab-0 #admin_password').css("border-color", "#e74c3c");
                }
                if (response=="0"){
                    $('#tab-0 #admin_password').css("border-color", "#2ecc71");
                    $('#tab-0 #admin_email').css("border-color", "#e74c3c");

                }
                if (response==""){
                    $('#tab-0 #admin_email').val("");
                    $('#tab-0 #admin_password').val("");
                    $('#tab-0 #admin_email').removeAttr("style");
                    $('#tab-0 #admin_password').removeAttr("style");
                }
            }
        });
    });

    // Background
    $.ajax({
        type: "GET",
        url: "php/backgroundList.php",
        success: function(response){
            $("#background-used").text(response);
        }
    });
    $("button#change_back").click(function(){
        $.ajax({
            type: "GET",
            url: "php/backgroundChange.php",
            success: function(response){
                $("#background-used").text(response);
            }
        });
    });

    // Aniamtion
    $.ajax({
        type: "GET",
        url: "php/animationCheck.php",
        success: function(response){
            if (response=="0"){
                $("#animation").text("Dezactivate");
            }
            else if (response=="1"){
                $("#animation").text("Activate");
            }
        }
    });
    $("button#change_animation").click(function(){
        $.ajax({
            type: "GET",
            url: "php/animationChange.php",
            success: function(response){
                $("#animation").text(response);
            }
        });
    });

}

function initList(){

    // Get materials
    $.ajax({
        type: "GET",
        url: "php/adminList.php",
        success: function(response){

            // Print list
            $('#tab-1').empty();
            $('#tab-1').html(response);

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
                    url: "php/adminResetContors.php",
                    data: {id:id},
                    dataType: "html",
                    success: function(response){
                        refreshMaterial();
                    }
                });
            });

            // Edit
            $('p.edit').click(function(){
                var id = $(this).parent().parent().data("id");
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
                $('#tab-2').addClass('current');
                $('ul.tabs li[data-tab=tab-2]').addClass('current');
                $.ajax({
                    type: "GET",
                    url: "php/adminEdit.php",
                    data: {id:id},
                    dataType: "html",
                    success: function(response){
                        $('#tab-2').html(response);
                        initEdit();
                    }
                });
            });

        }
    });

}

function initEdit(){

    // ID zerofill
    var id = $('#id').val();
    $("#id").val(zerofill(id, 6));

    // TinyMCE init lesson
    var sections = ["#introducere_CPP", "#sectiune_1_CPP", "#sectiune_2_CPP", "#sectiune_3_CPP", "#sectiune_4_CPP", "#sectiune_5_CPP", "#aplicare_CPP", "#exercitii_CPP", "#felicitari_CPP", "#introducere_PAS", "#sectiune_1_PAS", "#sectiune_2_PAS", "#sectiune_3_PAS", "#sectiune_4_PAS", "#sectiune_5_PAS", "#aplicare_PAS", "#exercitii_PAS", "#felicitari_PAS"];
    $.each(sections,function(index, value){
        requestLoaderShow();
        tinymce.init({
            init_instance_callback : "requestLoaderClose",
            selector: "textarea" + sections,
            language_url : 'js/ro.js',
            content_css : 'https://guides.github.com/components/primer/markdown.css',
            resize: false,
            plugins:[
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste",
                "code"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
            code_dialog_width: 300
        });
    });

    // Add lesson
    $('button#update-lectie-CPP').click(function(){

        // SQL update
        var id = $('#tab-2 #id').val();
        var date = $('#tab-2 #date').val();
        var title = $('#tab-2 #title').val();
        var description = $('#tab-2 #description').val();
        var tip = capitalize($('#tab-2 #tip').val());
        var lang = $('#tab-2 #lang_CPP').val().toUpperCase();
        var nume_sectiune_1 = $('#tab-2 #nume_sectiune_1_CPP').val();
        var nume_sectiune_2 = $('#tab-2 #nume_sectiune_2_CPP').val();
        var nume_sectiune_3 = $('#tab-2 #nume_sectiune_3_CPP').val();
        var nume_sectiune_4 = $('#tab-2 #nume_sectiune_4_CPP').val();
        var nume_sectiune_5 = $('#tab-2 #nume_sectiune_5_CPP').val();
        var introducere = tinyMCE.get('introducere_CPP').getContent({format : 'raw'});
        var sectiune_1 = tinyMCE.get('sectiune_1_CPP').getContent({format : 'raw'});
        var sectiune_2 = tinyMCE.get('sectiune_2_CPP').getContent({format : 'raw'});
        var sectiune_3 = tinyMCE.get('sectiune_3_CPP').getContent({format : 'raw'});
        var sectiune_4 = tinyMCE.get('sectiune_4_CPP').getContent({format : 'raw'});
        var sectiune_5 = tinyMCE.get('sectiune_5_CPP').getContent({format : 'raw'});
        var aplicare = tinyMCE.get('aplicare_CPP').getContent({format : 'raw'});
        var exercitii = tinyMCE.get('exercitii_CPP').getContent({format : 'raw'});
        var felicitari = tinyMCE.get('felicitari_CPP').getContent({format : 'raw'});
        $.ajax({
            type: "GET",
            url: "php/adminEditLesson.php",
            data: {id: id, date: date, title: title, description: description, tip: tip, lang: lang, introducere: introducere, nume_sectiune_1: nume_sectiune_1, nume_sectiune_2: nume_sectiune_2, nume_sectiune_3: nume_sectiune_3, nume_sectiune_4: nume_sectiune_4, nume_sectiune_5: nume_sectiune_5, sectiune_1: sectiune_1, sectiune_2: sectiune_2, sectiune_3: sectiune_3, sectiune_4: sectiune_4, sectiune_5: sectiune_5, aplicare: aplicare, exercitii: exercitii, felicitari: felicitari},             
            dataType: "html",
            success: function(response){
                console.log(response);
                moveToMaterial();
            }
        });

    });

    // Add lesson
    $('button#update-lectie-PAS').click(function(){

        // SQL update
        var id = $('#tab-2 #id').val();
        var date = $('#tab-2 #date').val();
        var title = $('#tab-2 #title').val();
        var description = $('#tab-2 #description').val();
        var tip = capitalize($('#tab-2 #tip').val());
        var lang = $('#tab-2 #lang_PAS').val().toUpperCase();
        var nume_sectiune_1 = $('#tab-2 #nume_sectiune_1_PAS').val();
        var nume_sectiune_2 = $('#tab-2 #nume_sectiune_2_PAS').val();
        var nume_sectiune_3 = $('#tab-2 #nume_sectiune_3_PAS').val();
        var nume_sectiune_4 = $('#tab-2 #nume_sectiune_4_PAS').val();
        var nume_sectiune_5 = $('#tab-2 #nume_sectiune_5_PAS').val();
        var introducere = tinyMCE.get('introducere_PAS').getContent({format : 'raw'});
        var sectiune_1 = tinyMCE.get('sectiune_1_PAS').getContent({format : 'raw'});
        var sectiune_2 = tinyMCE.get('sectiune_2_PAS').getContent({format : 'raw'});
        var sectiune_3 = tinyMCE.get('sectiune_3_PAS').getContent({format : 'raw'});
        var sectiune_4 = tinyMCE.get('sectiune_4_PAS').getContent({format : 'raw'});
        var sectiune_5 = tinyMCE.get('sectiune_5_PAS').getContent({format : 'raw'});
        var aplicare = tinyMCE.get('aplicare_PAS').getContent({format : 'raw'});
        var exercitii = tinyMCE.get('exercitii_PAS').getContent({format : 'raw'});
        var felicitari = tinyMCE.get('felicitari_PAS').getContent({format : 'raw'});
        $.ajax({
            type: "GET",
            url: "php/adminEditLesson.php",
            data: {id: id, date: date, title: title, description: description, tip: tip, lang: lang, introducere: introducere, nume_sectiune_1: nume_sectiune_1, nume_sectiune_2: nume_sectiune_2, nume_sectiune_3: nume_sectiune_3, nume_sectiune_4: nume_sectiune_4, nume_sectiune_5: nume_sectiune_5, sectiune_1: sectiune_1, sectiune_2: sectiune_2, sectiune_3: sectiune_3, sectiune_4: sectiune_4, sectiune_5: sectiune_5, aplicare: aplicare, exercitii: exercitii, felicitari: felicitari},             
            dataType: "html",
            success: function(response){
                console.log(response);
                moveToMaterial();
            }
        });

    });

    // TinyMCE init quiz
    var sections = ["#code_output_1_CPP", "#code_output_2_CPP", "#code_output_3_CPP", "#sectiune_3_CPP", "#code_drag_CPP", "#code_var_CPP","#code_output_1_PAS", "#code_output_2_PAS", "#code_output_3_PAS", "#sectiune_3_PAS", "#code_drag_PAS", "#code_var_PAS"];
    $.each(sections,function(index, value){
        requestLoaderShow();
        tinymce.init({
            init_instance_callback : "requestLoaderClose",
            selector: "textarea" + sections,
            language_url : 'js/ro.js',
            content_css : 'https://guides.github.com/components/primer/markdown.css',
            resize: false,
            plugins:[
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste",
                "code"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
            code_dialog_width: 300
        });
    });

    $('button#update-test-CPP').click(function(){
        var id = $('#tab-2 #id').val();
        var date = $('#tab-2 #date').val();
        var title = $('#tab-2 #title').val();
        var description = $('#tab-2 #description').val();
        var tip = capitalize($('#tab-2 #tip').val());
        var lang = "CPP";
        var intrebare_1 = $('#tab-2  #intrebare_1_CPP').val();
        var raspuns_1_intrebare_1 = $('#tab-2 #raspuns_1_intrebare_1_CPP').val();
        var raspuns_2_intrebare_1 = $('#tab-2 #raspuns_2_intrebare_1_CPP').val();
        var raspuns_3_intrebare_1 = $('#tab-2 #raspuns_3_intrebare_1_CPP').val();
        var intrebare_2 = $('#tab-2 #intrebare_2_CPP').val();
        var raspuns_1_intrebare_2 = $('#tab-2 #raspuns_1_intrebare_2_CPP').val();
        var raspuns_2_intrebare_2 = $('#tab-2 #raspuns_2_intrebare_2_CPP').val();
        var raspuns_3_intrebare_2 = $('#tab-2 #raspuns_3_intrebare_2_CPP').val();
        var intrebare_3 = $('#tab-2 #intrebare_3_CPP').val();
        var raspuns_1_intrebare_3 = $('#tab-2 #raspuns_1_intrebare_3_CPP').val();
        var raspuns_2_intrebare_3 = $('#tab-2 #raspuns_2_intrebare_3_CPP').val();
        var raspuns_3_intrebare_3 = $('#tab-2 #raspuns_3_intrebare_3_CPP').val();
        var intrebare_4 = $('#tab-2 #intrebare_4_CPP').val();
        var raspuns_1_intrebare_4 = $('#tab-2 #raspuns_1_intrebare_4_CPP').val();
        var raspuns_2_intrebare_4 = $('#tab-2 #raspuns_2_intrebare_4_CPP').val();
        var raspuns_3_intrebare_4 = $('#tab-2 #raspuns_3_intrebare_4_CPP').val();
        var intrebare_5 = $('#tab-2 #intrebare_5_CPP').val();
        var raspuns_1_intrebare_5 = $('#tab-2 #raspuns_1_intrebare_5_CPP').val();
        var raspuns_2_intrebare_5 = $('#tab-2 #raspuns_2_intrebare_5_CPP').val();
        var raspuns_3_intrebare_5 = $('#tab-2 #raspuns_3_intrebare_5_CPP').val();
        var output_1 = $('#tab-2 #output_1_CPP').val();
        var code_output_1 = tinyMCE.get('code_output_1_CPP').getContent({format : 'raw'});
        var output_2 = $('#tab-2 #output_2_CPP').val();
        var code_output_2 = tinyMCE.get('code_output_2_CPP').getContent({format : 'raw'});
        var output_3 = $('#tab-2 #output_3_CPP').val();
        var code_output_3 = tinyMCE.get('code_output_3_CPP').getContent({format : 'raw'});
        var drag = $('#tab-2 #drag_CPP').val();
        var code_drag = tinyMCE.get('code_drag_CPP').getContent({format : 'raw'});
        var code_var = tinyMCE.get('code_var_CPP').getContent({format : 'raw'});
        var correct = [];
        for (i=1;i<=10; i++){
            correct.push($("#corect_" + i + "_CPP").val());
        }
        $.ajax({
            type: "GET",
            url: "php/adminEditTest.php",
            data: {id: id, date: date, title: title, description :description, tip: tip, lang: lang, intrebare_1: intrebare_1, raspuns_1_intrebare_1: raspuns_1_intrebare_1, raspuns_2_intrebare_1: raspuns_2_intrebare_1, raspuns_3_intrebare_1: raspuns_3_intrebare_1, intrebare_2: intrebare_2, raspuns_1_intrebare_2: raspuns_1_intrebare_2, raspuns_2_intrebare_2: raspuns_2_intrebare_2, raspuns_3_intrebare_2: raspuns_3_intrebare_2, intrebare_3: intrebare_3, raspuns_1_intrebare_3: raspuns_1_intrebare_3, raspuns_2_intrebare_3: raspuns_2_intrebare_3, raspuns_3_intrebare_3: raspuns_3_intrebare_3, intrebare_4: intrebare_4, raspuns_1_intrebare_4: raspuns_1_intrebare_4, raspuns_2_intrebare_4: raspuns_2_intrebare_4, raspuns_3_intrebare_4: raspuns_3_intrebare_4, intrebare_5: intrebare_5, raspuns_1_intrebare_5: raspuns_1_intrebare_5, raspuns_2_intrebare_5: raspuns_2_intrebare_5, raspuns_3_intrebare_5: raspuns_3_intrebare_5, output_1: output_1, code_output_1: code_output_1, output_2: output_2, code_output_2: code_output_2, output_3: output_3, code_output_3: code_output_3, drag: drag, code_drag: code_drag, code_var: code_var, correct: correct},             
            dataType: "html",
            success: function(response){
                console.log(response);
                moveToMaterial();
            }
        });

    });

    $('button#update-test-PAS').click(function(){
        var id = $('#tab-2 #id').val();
        var date = $('#tab-2 #date').val();
        var title = $('#tab-2 #title').val();
        var description = $('#tab-2 #description').val();
        var tip = capitalize($('#tab-2 #tip').val());
        var lang = "PAS";
        var intrebare_1 = $('#tab-2  #intrebare_1_PAS').val();
        var raspuns_1_intrebare_1 = $('#tab-2 #raspuns_1_intrebare_1_PAS').val();
        var raspuns_2_intrebare_1 = $('#tab-2 #raspuns_2_intrebare_1_PAS').val();
        var raspuns_3_intrebare_1 = $('#tab-2 #raspuns_3_intrebare_1_PAS').val();
        var intrebare_2 = $('#tab-2 #intrebare_2_PAS').val();
        var raspuns_1_intrebare_2 = $('#tab-2 #raspuns_1_intrebare_2_PAS').val();
        var raspuns_2_intrebare_2 = $('#tab-2 #raspuns_2_intrebare_2_PAS').val();
        var raspuns_3_intrebare_2 = $('#tab-2 #raspuns_3_intrebare_2_PAS').val();
        var intrebare_3 = $('#tab-2 #intrebare_3_PAS').val();
        var raspuns_1_intrebare_3 = $('#tab-2 #raspuns_1_intrebare_3_PAS').val();
        var raspuns_2_intrebare_3 = $('#tab-2 #raspuns_2_intrebare_3_PAS').val();
        var raspuns_3_intrebare_3 = $('#tab-2 #raspuns_3_intrebare_3_PAS').val();
        var intrebare_4 = $('#tab-2 #intrebare_4_PAS').val();
        var raspuns_1_intrebare_4 = $('#tab-2 #raspuns_1_intrebare_4_PAS').val();
        var raspuns_2_intrebare_4 = $('#tab-2 #raspuns_2_intrebare_4_PAS').val();
        var raspuns_3_intrebare_4 = $('#tab-2 #raspuns_3_intrebare_4_PAS').val();
        var intrebare_5 = $('#tab-2 #intrebare_5_PAS').val();
        var raspuns_1_intrebare_5 = $('#tab-2 #raspuns_1_intrebare_5_PAS').val();
        var raspuns_2_intrebare_5 = $('#tab-2 #raspuns_2_intrebare_5_PAS').val();
        var raspuns_3_intrebare_5 = $('#tab-2 #raspuns_3_intrebare_5_PAS').val();
        var output_1 = $('#tab-2 #output_1_PAS').val();
        var code_output_1 = tinyMCE.get('code_output_1_PAS').getContent({format : 'raw'});
        var output_2 = $('#tab-2 #output_2_PAS').val();
        var code_output_2 = tinyMCE.get('code_output_2_PAS').getContent({format : 'raw'});
        var output_3 = $('#tab-2 #output_3_PAS').val();
        var code_output_3 = tinyMCE.get('code_output_3_PAS').getContent({format : 'raw'});
        var drag = $('#tab-2 #drag_PAS').val();
        var code_drag = tinyMCE.get('code_drag_PAS').getContent({format : 'raw'});
        var code_var = tinyMCE.get('code_var_PAS').getContent({format : 'raw'});
        var correct = [];
        for (i=1;i<=10; i++){
            correct.push($("#corect_" + i + "_PAS").val());
        }
        $.ajax({
            type: "GET",
            url: "php/adminEditTest.php",
            data: {id: id, date: date, title: title, description :description, tip: tip, lang: lang, intrebare_1: intrebare_1, raspuns_1_intrebare_1: raspuns_1_intrebare_1, raspuns_2_intrebare_1: raspuns_2_intrebare_1, raspuns_3_intrebare_1: raspuns_3_intrebare_1, intrebare_2: intrebare_2, raspuns_1_intrebare_2: raspuns_1_intrebare_2, raspuns_2_intrebare_2: raspuns_2_intrebare_2, raspuns_3_intrebare_2: raspuns_3_intrebare_2, intrebare_3: intrebare_3, raspuns_1_intrebare_3: raspuns_1_intrebare_3, raspuns_2_intrebare_3: raspuns_2_intrebare_3, raspuns_3_intrebare_3: raspuns_3_intrebare_3, intrebare_4: intrebare_4, raspuns_1_intrebare_4: raspuns_1_intrebare_4, raspuns_2_intrebare_4: raspuns_2_intrebare_4, raspuns_3_intrebare_4: raspuns_3_intrebare_4, intrebare_5: intrebare_5, raspuns_1_intrebare_5: raspuns_1_intrebare_5, raspuns_2_intrebare_5: raspuns_2_intrebare_5, raspuns_3_intrebare_5: raspuns_3_intrebare_5, output_1: output_1, code_output_1: code_output_1, output_2: output_2, code_output_2: code_output_2, output_3: output_3, code_output_3: code_output_3, drag: drag, code_drag: code_drag, code_var: code_var, correct: correct},             
            dataType: "html",
            success: function(response){
                console.log(response);
                moveToMaterial();
            }
        });

    });

}

function initAdd(){

    // Get max ID
    $.ajax({
        type: "GET",
        url: "php/adminGetMaxID.php",
        success: function(response){
            $('#add-id').val(zerofill(response, 6));
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
    $("#add-date").val(year + "-" + month + "-" + day);

    // Add by type
    $("#add-tip").keyup(function(event){
        if (($("#add-tip").val()=="Lectie")||($("#add-tip").val()=="lectie")){

            // Append elements
            $("#added").html("<p class='label'>Introducere</p><textarea id='introducere'></textarea><p class='label'>Nume sectiune #1</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_1'><p class='label'>Nume sectiune #2</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_2'><p class='label'>Nume sectiune #3</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_3'><p class='label'>Nume sectiune #4</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_4'><p class='label'>Nume sectiune #5</p><input type='text' autocomplete='off' spellcheck='false' id='nume_sectiune_5'><p class='label'>Sectiune #1</p><textarea id='sectiune_1'></textarea><p class='label'>Sectiune #2</p><textarea id='sectiune_2'></textarea><p class='label'>Sectiune #3</p><textarea id='sectiune_3'></textarea><p class='label'>Sectiune #4</p><textarea id='sectiune_4'></textarea><p class='label'>Sectiune #5</p><textarea id='sectiune_5'></textarea><p class='label'>Aplicare</p><textarea id='aplicare'></textarea><p class='label'>Exercitii</p><textarea id='exercitii'></textarea><p class='label'>Felicitari</p><textarea id='felicitari'></textarea><button class='admin-button' id='publica_test'>Publica!</button>");

            // TinyMCE init
            var sections = ["#introducere", "#sectiune_1", "#sectiune_2", "#sectiune_3", "#sectiune_4", "#sectiune_5", "#aplicare", "#exercitii", "#felicitari"];
            $.each(sections,function(index, value){
            requestLoaderShow();
                tinymce.init({
                    init_instance_callback : "requestLoaderClose",
                    selector: "textarea" + sections,
                    language_url : 'js/ro.js',
                    content_css : 'https://guides.github.com/components/primer/markdown.css',
                    resize: false,
                    plugins:[
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste",
                        "code"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
                    code_dialog_width: 300
                });
            });

            // Add lesson
            $('button#publica_test').click(function(){
                var id = $('#tab-3 #add-id').val();
                var date = $('#tab-3 #add-date').val();
                var title = $('#tab-3 #add-title').val();
                var description = $('#tab-3 #add-description').val();
                var tip = capitalize($('#tab-3 #add-tip').val());
                var lang = $('#tab-3 #add-lang').val().toUpperCase();
                var nume_sectiune_1 = $('#tab-3 #nume_sectiune_1').val();
                var nume_sectiune_2 = $('#tab-3 #nume_sectiune_2').val();
                var nume_sectiune_3 = $('#tab-3 #nume_sectiune_3').val();
                var nume_sectiune_4 = $('#tab-3 #nume_sectiune_4').val();
                var nume_sectiune_5 = $('#tab-3 #nume_sectiune_5').val();
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
                        $('#tab-3 input').val("");
                        var introducere = tinyMCE.get('introducere').setContent('');
                        var sectiune_1 = tinyMCE.get('sectiune_1').setContent('');
                        var sectiune_2 = tinyMCE.get('sectiune_2').setContent('');
                        var sectiune_3 = tinyMCE.get('sectiune_3').setContent('');
                        var sectiune_4 = tinyMCE.get('sectiune_4').setContent('');
                        var sectiune_5 = tinyMCE.get('sectiune_5').setContent('');
                        var aplicare = tinyMCE.get('aplicare').setContent('');
                        var exercitii = tinyMCE.get('exercitii').setContent('');
                        var felicitari = tinyMCE.get('felicitari').setContent('');
                        moveToMaterial();
                    }
                });
            });

        }

        if (($("#add-tip").val()=="Test")||($("#add-tip").val()=="test")){

            // Append elements
            $("#added").html("<p class='label'>Intrebare #1</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_1' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_1' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_1' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_1' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_1' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #2</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_2' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_2' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_2' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_2' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_2' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #3</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_3' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_3' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_3' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_3' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_3' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #4</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_4' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_4' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_4' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_4' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_4' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Intrebare #5</p><input type='text' autocomplete='off' spellcheck='false' id='intrebare_5' placeholder='Enunt'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_1_intrebare_5' placeholder='Raspuns #1'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_2_intrebare_5' placeholder='Raspuns #2'><input type='text' autocomplete='off' spellcheck='false' id='raspuns_3_intrebare_5' placeholder='Raspuns #3'><input type='text' autocomplete='off' spellcheck='false' id='corect_5' placeholder='Raspuns corect' pattern='1|2|3'><p class='label'>Output #1</p><input type='text' autocomplete='off' spellcheck='false' id='output_1' placeholder='Enunt'><textarea id='code_output_1'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_6' placeholder='Raspuns corect'><p class='label'>Output #2</p><input type='text' autocomplete='off' spellcheck='false' id='output_2' placeholder='Enunt'><textarea id='code_output_2'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_7' placeholder='Raspuns corect'><p class='label'>Output #3</p><input type='text' autocomplete='off' spellcheck='false' id='output_3' placeholder='Enunt'><textarea id='code_output_3'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_8' placeholder='Raspuns corect'><p class='label'>Drag and drop</p><input type='text' autocomplete='off' spellcheck='false' id='drag' placeholder='Enunt'><textarea id='code_drag'></textarea><textarea id='code_var'></textarea><input type='text' autocomplete='off' spellcheck='false' id='corect_9' placeholder='Raspuns corect #1'><input type='text' autocomplete='off' spellcheck='false' id='corect_10' placeholder='Raspuns corect #2'><button class='admin-button' id='publica_test'>Publica</button>");

            // TinyMCE init
            var sections = ["#code_output_1", "#code_output_2", "#code_output_3", "#sectiune_3", "#code_drag", "#code_var"];
            $.each(sections,function(index, value){
                requestLoaderShow();
                tinymce.init({
                    init_instance_callback : "requestLoaderClose",
                    selector: "textarea" + sections,
                    language_url : 'js/ro.js',
                    content_css : 'https://guides.github.com/components/primer/markdown.css',
                    resize: false,
                    plugins:[
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table contextmenu paste",
                        "code"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
                    code_dialog_width: 300
                });
            });

            // Add lesson
            $('button#publica_test').click(function(){
                var id = $('#tab-3 #add-id').val();
                var date = $('#tab-3 #add-date').val();
                var title = $('#tab-3 #add-title').val();
                var description = $('#tab-3 #add-description').val();
                var tip = capitalize($('#tab-3 #add-tip').val());
                var lang = $('#tab-3 #add-lang').val().toUpperCase();
                var intrebare_1 = $('#tab-3  #intrebare_1').val();
                var raspuns_1_intrebare_1 = $('#tab-3 #raspuns_1_intrebare_1').val();
                var raspuns_2_intrebare_1 = $('#tab-3 #raspuns_2_intrebare_1').val();
                var raspuns_3_intrebare_1 = $('#tab-3 #raspuns_3_intrebare_1').val();
                var intrebare_2 = $('#tab-3 #intrebare_2').val();
                var raspuns_1_intrebare_2 = $('#tab-3 #raspuns_1_intrebare_2').val();
                var raspuns_2_intrebare_2 = $('#tab-3 #raspuns_2_intrebare_2').val();
                var raspuns_3_intrebare_2 = $('#tab-3 #raspuns_3_intrebare_2').val();
                var intrebare_3 = $('#tab-3 #intrebare_3').val();
                var raspuns_1_intrebare_3 = $('#tab-3 #raspuns_1_intrebare_3').val();
                var raspuns_2_intrebare_3 = $('#tab-3 #raspuns_2_intrebare_3').val();
                var raspuns_3_intrebare_3 = $('#tab-3 #raspuns_3_intrebare_3').val();
                var intrebare_4 = $('#tab-3 #intrebare_4').val();
                var raspuns_1_intrebare_4 = $('#tab-3 #raspuns_1_intrebare_4').val();
                var raspuns_2_intrebare_4 = $('#tab-3 #raspuns_2_intrebare_4').val();
                var raspuns_3_intrebare_4 = $('#tab-3 #raspuns_3_intrebare_4').val();
                var intrebare_5 = $('#tab-3 #intrebare_5').val();
                var raspuns_1_intrebare_5 = $('#tab-3 #raspuns_1_intrebare_5').val();
                var raspuns_2_intrebare_5 = $('#tab-3 #raspuns_2_intrebare_5').val();
                var raspuns_3_intrebare_5 = $('#tab-3 #raspuns_3_intrebare_5').val();
                var output_1 = $('#tab-3 #output_1').val();
                var code_output_1 = tinyMCE.get('code_output_1').getContent({format : 'raw'});
                var output_2 = $('#tab-3 #output_2').val();
                var code_output_2 = tinyMCE.get('code_output_2').getContent({format : 'raw'});
                var output_3 = $('#tab-3 #output_3').val();
                var code_output_3 = tinyMCE.get('code_output_3').getContent({format : 'raw'});
                var drag = $('#tab-3 #drag').val();
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
                        $('#tab-3 input').val("");
                        tinyMCE.get('code_output_1').setContent('');
                        tinyMCE.get('code_output_2').setContent('');
                        tinyMCE.get('code_output_3').setContent('');
                        tinyMCE.get('code_drag').setContent('');
                        tinyMCE.get('code_var').setContent('');
                        moveToMaterial();
                    }
                });
            });

        }

    });

}

function initContact(){

    // Contact
    $('#contact-list').empty();
    var messageList = $('#contact-list');
    var messagesRef = new Firebase('https://infocuza-contact.firebaseio.com/');
    messagesRef.limitToLast(5).on('child_added', function (snapshot){
        var key = snapshot.key();
        var data = snapshot.val();
        var name = data.name || "Anonymous";
        var message = data.message;
        var date = snapshot.date;
        messageList.append("<div><h3>" + name + "</h3><b>" + message + "</b></div>");
    });

    // Chat rooms
    $('#chat-list').empty();
    var chatList = $('#chat-list');
    var messagesRef = new Firebase('https://infocuza-chat.firebaseio.com/room-metadata/');
    messagesRef.limitToLast(5).on('child_added', function (snapshot){
        var key = snapshot.key();
        var data = snapshot.val();
        var name = data.name;
        var stamp = data.createdAt;
        var date = new Date(stamp);
        chatList.append("<div><h3>" + name + "</h3><b>" + date + "</b></div>");
    });

}

$(document).ready(function(){

    // Tab 0: General(default)
    initGeneral();
    $('li.tab-link[data-tab=tab-0]').click(function(){
         initGeneral();
    });

    // Tab 1: List
    $('li.tab-link[data-tab=tab-1]').click(function(){
        initList();
    });

    // Tab 3: Add
    $('li.tab-link[data-tab=tab-3]').click(function(){
        initAdd();
    });

    // Tab 4: Contact and chat
    $('li.tab-link[data-tab=tab-4]').click(function(){
        initContact();
    });
    
});