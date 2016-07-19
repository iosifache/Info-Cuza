$(document).ready(function(){

    // Swich views
    function swich_view_to_grid(){
        $('#swich-view-to-grid').addClass("disable");
        $('#swich-view-to-list').removeClass("disable");
        $('.material-list').toggleClass('material-list material-grid');
        grid = 1;
    }
    function swich_view_to_list(){
        $('#swich-view-to-list').addClass("disable");
        $('#swich-view-to-grid').removeClass("disable");
        $('.material-grid').toggleClass('material-grid material-list');
        grid = 0;
    }

    // Init
    function init(){

        // List.js init
        var options = {
            valueNames: ['title', 'tip', 'views', 'likes'],
        };
        var materials = new List('materials', options);

        // Set functions to button
        var grid = 1;
        $('#swich-view-to-grid').click(function(){
            swich_view_to_grid();
        });
        $('#swich-view-to-list').click(function(){
            swich_view_to_list();
        });
        $('#reset-view').click(function(){
            $('#search').val('');
            materials.search();
        });

        // Change view on <900px resolutions
        var win = $(this);
        if (win.width() <= 900){
            swich_view_to_list();
            $('#swich-view-to-grid').addClass("not");
        }

    }

	// Get materials 
	$.ajax({
        type: "GET",
        url: "php/materials.php",             
        dataType: "html",           
        success: function(response){                    
            $(".list").html(response); 
            init();
        }
    });

});