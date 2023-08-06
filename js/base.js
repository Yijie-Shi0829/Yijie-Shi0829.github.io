(function () {
  initActive()
  bindEvenInit()
  var mycard = $('#mycard')
  
  let mycardTop = mycard&&mycard.offset()&&mycard.offset().top;
  window.onscroll = function () {
    var e = e || window.event;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop )
    if (scrollTop > mycardTop) {
      mycard.addClass('scroll')
    } else {
      mycard.removeClass('scroll')
    }
  }

  $('#switch').click(function () {
    if ($('#switch').hasClass('active')) { 
      sessionStorage.setItem('mode', true)
      change_to_day()
    } else {
      sessionStorage.setItem('mode', false)
      change_to_night()
    }
  })
  
  $('#zhezhao>.close').click(function () {
    if ($('#zhezhao').hasClass('active')) {
      $('#zhezhao').removeClass('active')
      document.getElementById('videoResumeC').pause();
    } else {
      $('#zhezhao').addClass('active')
    }
  })
  
  $('#minmenu').click(function () {
    if ($('#minmenu').hasClass('active')) {
      $('#minmenu').removeClass('active');
      $('.menu_list').removeClass('active');
      
    } else {
      $('#minmenu').addClass('active')
      $('.menu_list').addClass('active')
    }
  })

  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.lodding-wrap').css('opacity');
      let timer = null;
      timer = opacity&&setInterval(() => {
        opacity-=0.1
        $('.lodding-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
          $('.lodding-wrap').css('display','none');
          clearInterval(timer)
        }
      }, 100);
      
    }
  }

  function change_to_night () {
    let root = document.querySelector(':root')
    $('#switch').addClass('active')
      $('.navigation').addClass('active')
      
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#00283A')
      root.style.setProperty('--headerCOlor', '#00283A')
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
      root.style.setProperty('--headerFont', '#fff' )
      root.style.setProperty('--fontColor', '#00283A' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor','#02162b' )
  }

  function change_to_day () {
    let root = document.querySelector(':root')
    $('#switch').removeClass('active')
      $('.navigation').removeClass('active')
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#fff')
      root.style.setProperty('--headerCOlor', '#fff')
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
      root.style.setProperty('--headerFont', '#00283A' )
      root.style.setProperty('--fontColor', '#fff' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor', '#f4f5f7')
  }

  function initActive () {
    var active = sessionStorage.getItem('mode')
    if (active && active == 'true') { 
      change_to_day()
    } else { 
      change_to_night()
    }
  }

  function bindEvenInit(){
    $('.navbtn').bind("click touch",function () {
      $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500)
      return false
    })
  }
})()
