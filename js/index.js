// 상단 버튼
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');



// 팝업
function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }


// go top버튼
$(function(){
  $('.go_top').hide();
  // 윈도우에 스크롤이 300px 이상 생기면 gotop 나타나도록
  $(window).scroll(function(){
      if($(this).scrollTop() >=300){
          // go top 버튼 보여줘
          $('.go_top').fadeIn();
      }else {
          // go top 버튼 숨어줘
          $('.go_top').fadeOut();
      }
  })

  // gotop 버튼 클릭하면 html, body 스크롤 양이 0으로 가도록 설정
  $('.go_top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
          scrollTop : 0
      }, 1000)
  })
 
  // 라이트모드 색상변경
  $('header button').click(function(){
    $('header, .section1, .section3, .section4, .section6, .section8, .section9, .section10, .section11, .section12, footer').toggleClass('light')
  })
})
