// 슬릭슬라이드
$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 네이브 고정시키기
$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if(sct>= 100 && !$('#header').hasClass('on') ) { 
        $ ('#header').addClass('on')
    }else if ( sct < 100 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')}
})







// 네이브 클릭시 스르르가기
var aboutNear = $('#about').offset().top
var worksNear = $('#works').offset().top
var servicesNear = $('#services').offset().top
var interiorsNear = $('#interior').offset().top
var contactNear = $('#contact').offset().top




$('.nav .depth1 > li').on('click',function(e){
    e.preventDefault()
    // $(this).addClass('on')
    // .siblings().removeClass('on')
    var num = $(this).index()
    
     if(num===0){
        $('html').animate({scrollTop:aboutNear},500)
    }else if(num===1){
        $('html').animate({scrollTop:worksNear},500)
    }else if(num===2){
        $('html').animate({scrollTop:servicesNear},500)
    }else if(num==3){
        $('html').animate({scrollTop:interiorsNear},500)
    }else {
        $('html').animate({scrollTop:contactNear},500)
    }
})

// 로고 클릭시 스르르가기
$('header #home').on('click', function(e){
    e.preventDefault()
    // $(this).addClass('on')
    // .siblings().removeClass('on')
    var num = $(this).index()

    if(num===0){
        $('html').animate({scrollTop:0},700)
    }

})




// 햄버거버튼 클릭시 네이브 보임
$('#header .hambar').on('click',function(){
    
  $(this).next().toggleClass('on')
    
})



/////////// 여기서 부터 ////////////  이해가 하나도 안가요 ㅠ
// resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 767;

// 함수선언   모르겠으면 복붙해서 쓰기 위 deviceSize 의 값만 원하는 값으로 바꿔서 
function scrollox(status) {
    $('html').css({
        overflowY:status
    })
    var htmlwidth = $('html').width()
    return htmlwidth
}
var swh = scrollox('hidden')
var sws = scrollox('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize1 = deviceSize1 - swd;
}


var ww;
// 함수선언 여기서는 this사용 금지 this를 지목하면 그건 윈도우로 먹힌다는데..?
function init(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('tablet') ) {    //고정
        $('html').addClass('tablet').removeClass('mobile pc')   //고정   
        $('html').scrollTop(0) // 사이즈가 달라지는 최초이면 스크롤이 위로 자동올라감
        $('.article5 > div').addeClass('row')

       
    } else if ( ww<=deviceSize1 && !$('html').hasClass('mobile') ) {    //고정
        $('html').addClass('mobile').removeClass('tablet')   //고정
        $('html').scrollTop(0) // 사이즈가 달라지는 최초이면 스크롤이 위로 자동올라감
        $('.depth1 > li').removeClass('on') // 햄버거네이브를 열어놓고 사이즈변경우 다시 그 사이즈에서 뎁스2가 그대로 열려있으니 리셋할때!
        $('.nav').removeClass('on')
        // $('.article5 > div').removeClass('row')
        // $('.article6 ').removeClass('row')
        
    } 
}

// 함수호출 
init()

$(window).on('resize', function(){
    init()
})
/////////////////////// 여기까지 ////////////////////////



// 이름유효적용

var name





