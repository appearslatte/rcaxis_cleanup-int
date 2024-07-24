var mySwiper = new Swiper ('.mv_slider', {
    loop:true,
    speed:1500,
    slidesPerView:1,
    spaceBetween:0,
    direction:'horizontal',
    effect:'fade',
    centeredSlides:true,
    allowTouchMove:false,
    loopAdditionalSlides:1,
    autoplay: {
      delay: 5000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    

    breakpoints: {
        1000: {
        slidesPerView: 1,
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



  var mySwiper = new Swiper ('.about_slider', {
    loop:true,
    speed:1500,
    slidesPerView:1,
    spaceBetween:0,
    direction:'horizontal',
    effect:'fade',
    centeredSlides:true,
    allowTouchMove:false,
    loopAdditionalSlides:1,
    autoplay: {
      delay: 5000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    
    breakpoints: {
        1000: {
        slidesPerView: 1,
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



  var mySwiper = new Swiper ('.scene_slider', {
    loop:true,
    speed:600,
    slidesPerView:4,
    spaceBetween:20,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    allowTouchMove:false,
    loopAdditionalSlides:1,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    

    breakpoints: {
        1000: {
        slidesPerView: 2,
        spaceBetween:15,
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
  
  
  