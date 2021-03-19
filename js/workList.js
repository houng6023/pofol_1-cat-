






$('.article3 .workBtn button').on('click',function(e){
    e.preventDefault()
    $('.article3 .formBox').css({display:'block'})
})

$('.article3 .formBox button[type=submit]').on('click', function(e){
    e.preventDefault()
    var images = $('.formBox #images').val()
    var work = $('.formBox #work').val()
    var address = $('.formBox #address').val()
    if (images==='' &&  work==='' && address==='') {
        alert('이미지를 넣어주세요')
        return false
    }
    if (images==='') {
        alert('이미지를 넣어주세요')
        return false
    }
    if (work==='') {
        alert('work에 내용이 입력되지않았습니다. 입력해주세요.')
        return false
    }
    if (address==='') {
        alert('웹사이트를 입력하지 않았습니다. 입력해주세요.')
        return false
    }
    var list = '';
    list += `<li><div><img src="${images}"onerror="this.src='img/noimage.jpeg'" alt="">`
    list += `<div class="plus"><i class="fas fa-plus"></i><p class="plustxt">상세보기</p></div></div>`
    list += `<div><h3>${work}</h3><p>${address}</p></div></li>`


   
    $('.article3  ul').append(list)

    $('.formBox #images').val('')
    $('.formBox #work').val('')
    $('.formBox #address').val('')

})

$('.article3 .formBox button[type=reset]').on('click', function(e){
    e.preventDefault()
    $('.article3 .formBox').css({display:'none'})
})

// 추가된 리스트 없애는 방법없을까? 생각해보자 
$('.article3').on('click','li button' ,function(e){
    e.preventDefault()
    $(this).parent().remove()
    // $('li button').css({right:0})

})
   
