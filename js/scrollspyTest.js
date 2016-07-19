$(window).scroll(function(){

    var scrollTop = $(window).scrollTop();

    // Fixed plugin
    if(scrollTop>360){
        $('.scrollspy').css({ 'position': 'fixed', 'top' : '0'});
    }
    else{
        $('.scrollspy').css({ 'position': 'absolute', 'top': '360px'});
    }

    // Scrollspy highlight
    var j, maxIndex = 0;
    var sections = ["#multiple", "#output", "#drag", "#termina"];
    var sectionTop = [];
    $.each(sections,function(index, value){
        sectionTop[index] = $(value).offset().top;
        j++;
    });
    $(sectionTop).each(function(index, value){
        if(scrollTop>sectionTop[index]){
            maxIndex = index;
        }
    });
    $('.scrollspy li').css({'opacity': '.3'});
    $('.scrollspy li:eq(' + maxIndex + ')').css({'opacity': '1'});
    
});