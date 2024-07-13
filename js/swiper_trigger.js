var mySwiper = new Swiper ('.scene_slider', {
    loop:true,
    speed:600,
    slidesPerView:5,
    spaceBetween:10,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    loopAdditionalSlides:1,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    

    breakpoints: {
        1000: {
        slidesPerView: 2,
        direction: 'horizontal'
        },
    },

    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },

    navigation: {
      nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
      prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },

    scrollbar: {
      el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    }
  });
  
  
  