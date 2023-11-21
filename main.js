//swiper//
new Swiper('.main__visual .swiper-container', {
  slidesPreVeiw: 1,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 4000 
  },
  pagination: {
    el: '.main__visual .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: 'main__visual .swiper-prev',
    nextEl: 'main__visual .swiper-next'
  }
});

new Swiper('.main__new .swiper-container', {
  slidesPreVeiw: 4,
  spaceBetween: 10,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 5000 
  },
  pagination: {
    el: '.main__new .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.main__new .swiper-prev',
    nextEl: '.main__new .swiper-next'
  }
});