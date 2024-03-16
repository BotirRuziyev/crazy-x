const homeSwiper = new Swiper(".homeSwiper", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const paymentSwiper = new Swiper(".paymentSwiper", {
  slidesPerView: 12,
  // Responsive breakpoints
  breakpoints: {
    4: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 12,
      spaceBetween: 10,
    },
  },
});

let burgerbtn = document.querySelector('.burger_btn')
let mobilef = document.querySelector('.mobile-f')
let csstransforms = document.querySelector(".csstransforms");
let menuplay = document.querySelector("#mobile-menu-play");
let cnwrapper = document.querySelector(".cn-wrapper");
let selectlanguage = document.querySelector(".header-second__select-language .select-language");
let languageoptions = document.querySelector(".header-second__select-language .select-language__options-list");
let fselectlanguage = document.querySelector(".footer .select-language");
let flanguageoptions = document.querySelector(".footer .select-language__options-list");
let soundturnoff = document.querySelectorAll(".sound-turn-off");

burgerbtn.onclick = () => {
    mobilef.classList.toggle('mobile-f-active')
}
menuplay.onclick = () => {
  menuplay.classList.toggle("m-open");
  csstransforms.classList.toggle("opened-menu");
  cnwrapper.classList.toggle("opened-nav");
};
selectlanguage.onclick = () => {
  selectlanguage.classList.toggle("active");
  languageoptions.classList.toggle("select-language__options-list_active");
};
fselectlanguage.onclick = () => {
  fselectlanguage.classList.toggle("active");
  flanguageoptions.classList.toggle("select-language__options-list_active");
};
soundturnoff.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.toggle("active");
  };
});
