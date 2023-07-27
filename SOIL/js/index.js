$(document).ready(function(){
    $('#fullpage').fullpage({
        // 네비게이션 눌렀을 때 화면이동
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['메뉴1', '메뉴2', '메뉴3', '메뉴4', '메뉴5', '푸터'],
        keyboardScrolling: false,
    
    })
    
})

// 밑줄 애니메이션
const underlineElements = document.querySelectorAll('.underline');

underlineElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const textWidth = element.offsetWidth;
        element.computedStyleMap.setProperty('--underline-width', `${textWidth}px`);
    });
});