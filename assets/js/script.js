// Menu
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__menu-btn')
const menuLink = document.querySelectorAll('.header__menu-link')
const menuWrapp = document.querySelector('.header__menu-wrapper')

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('header__nav--active')
  if (window.innerHeight > 390) {
    document.body.classList.toggle('stop-scroll')
  }
}) // при клике на бургер добавляется или удаляется класс active

menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.remove('header__nav--active')
    document.body.classList.remove('stop-scroll')
  })
}) // Скрывает меню если нажать на ссылку

document.addEventListener('click', (e) => {
  if (e.target === menuWrapp) {
    menu.classList.remove('header__nav--active')
    document.body.classList.remove('stop-scroll')
  }
}) // Скрывает меню если нажать на экран

// Swiper
const swiper = new Swiper('.services__swiper', {
  // slidesPerView: 2,
  // spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {});

// Accordion
new Accordion('.accordion-container');