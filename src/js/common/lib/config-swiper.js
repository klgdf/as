export const init = () => {
  if (document.querySelector(".swiper")) {
    var banner = new Swiper(".swiper", {
      //loop: true,
      mousewheel: false,
      //effect: "fade",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
};
