import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: '.navigation__button',
    prevEl: '.navigation__button--left',
  },
});

const listOfButtons = document.querySelector('.card__list');
console.log(listOfButtons);
let visibleSlide = document.querySelector('#img');
console.log(visibleSlide.src);

listOfButtons.addEventListener('click', (event) => {
  const { number } = event.target.dataset;
  visibleSlide.src = `https://raw.githubusercontent.com/natalia-ponomarenko/images-for-test/main/${number}.jpg`;
  console.log(visibleSlide.src);
  return visibleSlide;
});
