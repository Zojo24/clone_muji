//swiper//

new Swiper('.main__visual .swiper', {
  loop: true,
  autoplay: {
    delay: 4000 
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.main__new .swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.main__mdpick .swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.main__season .swiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.main__furniture .swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// const toTopEl = document.querySelector('#to-top');
// toTopEl.addEventListener('click', function () {
//   gsap.to(window, .7, {
//     scrollTo: 0
//   });
// });