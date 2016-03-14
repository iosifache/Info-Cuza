$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>324){
        $('#scrollspy').css({ 'position': 'fixed', 'top' : '10', 'right':'calc((100% - 960px)/2)' });
    }
    else{
        $('#scrollspy').css({ 'position': 'relative', 'top': '0'});
    }
});
