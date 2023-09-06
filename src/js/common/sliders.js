export function initSliders() {
  const sliderDoctors = new Swiper('.doctors__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.doctors .swiper-button-next',
      prevEl: '.doctors .swiper-button-prev',
    },
  });

  const sliderScreen9 = new Swiper('.screen-9__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      540: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    navigation: {
      nextEl: '.screen-9 .swiper-button-next',
      prevEl: '.screen-9 .swiper-button-prev',
    },
  });

  const sliderLicenses = new Swiper('.licenses__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.licenses .swiper-button-next',
      prevEl: '.licenses .swiper-button-prev',
    },
  });

  const sliderReview = new Swiper('.review__slider', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.review .swiper-button-next',
      prevEl: '.review .swiper-button-prev',
    },
  });

}