var count = 0;

window.onscroll = function(e) {
    // 추가되는 임시 콘텐츠
    // window height + window scrollY 값이 document height보다 클 경우,
    if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        count++;
        var addContent = `<div class='block'><li> ${count}번쨰로 추가된 콘텐츠 </li></div>`
        // article에 추가되는 콘텐츠를 append
        document.querySelector('article').innerHTML += addContent;
    }
}