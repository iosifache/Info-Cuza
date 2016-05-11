$(document).ready(function(){

    // If submit
    $('#submit').click(function(){
        $('#tutorial').empty();
        $('#quiz').empty();
    });

    // If Tutorial is checked
    $('#tutorial-check').change(function(){
        $('#tutorial').empty();
        $('#quiz').empty();
        if($(this).is(":checked")){
            $('#tutorial').append("<label>Nume categorie #1:</label><br><input type='text' name='categorie1' id='categorie1' spellcheck='false'></input><br><label>Nume categorie #2:</label><br><input type='text' name='categorie2' id='categorie2' spellcheck='false'></input><br><label>Nume categorie #3:</label><br><input type='text' name='categorie3' id='categorie3' spellcheck='false'></input><br><label>Nume categorie #4:</label><br><input type='text' name='categorie4' id='categorie4' spellcheck='false'></input><br><label>Introducere:</label><br><textarea name='introducere' rows='10' id='introducere' spellcheck='false'></textarea><br><label>Continut categorie #1:</label><br><textarea name='continut_categorie_1' rows='10' id='continut_categorie_1' spellcheck='false'></textarea><br><label>Continut categorie #2:</label><br><textarea name='continut_categorie_2' rows='10' id='continut_categorie_2' spellcheck='false'></textarea><br><label>Continut categorie #3:</label><br><textarea name='continut_categorie_3' rows='10' id='continut_categorie_3' spellcheck='false'></textarea><br><label>Continut categorie #4:</label><br><textarea name='continut_categorie_4' rows='10' id='continut_categorie_4' spellcheck='false'></textarea><br><label>Exercitii:</label><br><textarea name='exercitii' rows='10' id='exercitii' spellcheck='false'></textarea><br><label>Celebrate #1:</label><br><input type='text' name='celebrate1' id='celebrate1' spellcheck='false'></input><br><label>Celebrate #2:</label><br><input type='text' name='celebrate2' id='celebrate2' spellcheck='false'></input><br><label>Celebrate #3:</label><br><input type='text' name='celebrate3' id='celebrate3' spellcheck='false'></input><br><label>Editor #1:</label><br><input type='text' name='editor1' id='editor1' spellcheck='false'></input><br><label>Editor #2:</label><br><input type='text' name='editor2' id='editor2' spellcheck='false'></input><br><label>Editor #3:</label><br><input type='text' name='editor3' id='editor3' spellcheck='false'></input><br>");
        }
        else{
            $('#tutorial').empty();
        }
    });

    // If Quiz is checked
    $('#quiz-check').change(function(){
        $('#tutorial').empty();
        $('#quiz').empty();
        if($(this).is(":checked")){
            $('#quiz').append("<label>Intrebare #1:</label><br><input type='text' name='intrebare1' id='intrebare1' spellcheck='false'></input><br><label>Raspuns intrebare #1:</label><br><textarea name='raspuns_intrebare_1' rows='10' id='raspuns_intrebare_1' spellcheck='false'></textarea><br><label>Intrebare #2:</label><br><input type='text' name='intrebare2' id='intrebare2' spellcheck='false'></input><br><label>Raspuns intrebare #2:</label><br><textarea name='raspuns_intrebare_2' rows='10' id='raspuns_intrebare_2' spellcheck='false'></textarea><br><label>Intrebare #3:</label><br><input type='text' name='intrebare3' id='intrebare3' spellcheck='false'></input><br><label>Raspuns intrebare #3:</label><br><textarea name='raspuns_intrebare_3' rows='10' id='raspuns_intrebare_3' spellcheck='false'></textarea><br><label>Intrebare #4:</label><br><input type='text' name='intrebare4' id='intrebare4' spellcheck='false'></input><br><label>Raspuns intrebare #4:</label><br><textarea name='raspuns_intrebare_4' rows='10' id='raspuns_intrebare_4' spellcheck='false'></textarea><br><label>Intrebare #5:</label><br><input type='text' name='intrebare5' id='intrebare5' spellcheck='false'></input><br><label>Raspuns intrebare #5:</label><br><textarea name='raspuns_intrebare_5' rows='10' id='raspuns_intrebare_5' spellcheck='false'></textarea><br><label>Output #1:</label><br><input type='text' name='output1' id='output1' spellcheck='false'></input><br><label>Raspuns intrebare #1:</label><br><textarea name='output_code_1' rows='10' id='output_code_1' spellcheck='false'></textarea><br><label>Output #2:</label><br><input type='text' name='output2' id='output2' spellcheck='false'></input><br><label>Raspuns intrebare #2:</label><br><textarea name='output_code_2' rows='10' id='output_code_2' spellcheck='false'></textarea><br><label>Output #3:</label><br><input type='text' name='output3' id='output3' spellcheck='false'></input><br><label>Raspuns intrebare #3:</label><br><textarea name='output_code_3' rows='10' id='output_code_3' spellcheck='false'></textarea><br><label>Drag code:</label><br><textarea name='drag_code' rows='10' id='drag_code' spellcheck='false'></textarea><br><label>Drag variantes:</label><br><textarea name='drag_variantes' rows='10' id='drag_variantes' spellcheck='false'></textarea><br>");
        }
        else{
            $('#quiz').empty();
        }
    });
});
