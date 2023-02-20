// Get the selected language element and menu item
const selectedLang = document.getElementById("selected-lang");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".fitness-slider  ", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  freeMode: true,
  speed: 10000,
  freeModeMomentum: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".martial-arts-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  freeMode: true,
  speed: 10000,
  freeModeMomentum: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".trainer-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
