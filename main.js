//swiper//
new Swiper('.main__content .swiper-container', {
  slidesPreVeiw: 1,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 4000 
  },
  pagination: {
    el: '.main__content .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: 'main__content .swiper-prev',
    nextEl: 'main__content .swiper-next'
  }
});

// new Swiper('.content__new .swiper-container', {
//   slidesPreVeiw: 4,
//   spaceBetween: 10,
//   centerdSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 5000 
//   },
//   pagination: {
//     el: '.content__new .swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     prevEl: '.content__new .swiper-prev',
//     nextEl: '.content__new .swiper-next'
//   }
// });