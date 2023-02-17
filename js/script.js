// Get the selected language element and menu item
const selectedLang = document.getElementById("selected-lang");
const langMenuItem = document.getElementById("eng");
console.log("geee");

// Add a click event listener to the menu item
langMenuItem.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  selectedLang.textContent = this.textContent; // Update selected language text
  selectedLang.style.backgroundImage = "url(../images/flags/uk.svg)";
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
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
    delay: 9500,
    disableOnInteraction: false,
  },
});
