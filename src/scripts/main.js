import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.navigation__button',
    prevEl: '.navigation__button--left',
  },
});

const listOfButtons = document.querySelector('.card__list');
listOfButtons.addEventListener('click', (event) => {
  const { number } = event.target.dataset;
  swiper.slideTo(number);
});
