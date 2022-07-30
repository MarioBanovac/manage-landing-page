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

const menuBtn = document.querySelector(".menu-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    menuBtn.classList.add("open");
    hamburgerMenu.classList.add("flex");
    hamburgerMenu.classList.remove("hidden");
    isOpen = true;
  } else {
    menuBtn.classList.remove("open");
    hamburgerMenu.classList.remove("flex");
    hamburgerMenu.classList.add("hidden");
    isOpen = false;
  }
});
