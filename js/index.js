















// 마우스휠을 내리고 올릴떄 스르르 자동으로 가게하는거! .stop()필수!
$('section > div').on('mousewheel', function(e, delta){
    // 0보다 크면 위로,0보다 작으면 아래도
    if (delta>0){
        var prev = $(this).prev().offset().top
        $('html').stop().animate({scrollTop:prev}, 500, 'linear')
        

    }else if(delta<0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({scrollTop:next}, 500, 'linear')
        
    }


})






