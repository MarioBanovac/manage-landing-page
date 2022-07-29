const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewPort: false,
  },
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
