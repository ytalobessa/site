// EFEITO PARALLAXX
$(function() {
    $('.parallax').each(function() {
        var $obj = $(this);
 
        $(window).scroll(function() {
            var offset = $obj.offset();
            var yPos = -($(window).scrollTop() - offset.top) / $obj.data('speed');
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);
        });
    });
    
    //DESLIZA O MENU
    $('.main_menu a').click(function(){
        var goto = $('.'+$(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });
    
    //SUSpENDE MENU
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.main_header').outerHeight() + 150){
            $('.main_header').addClass('main_header_fixed');
        }else{
            $('.main_header').removeClass('main_header_fixed');
        }
    }); 

     //BACK TOPO
    $('.home_back').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

});

