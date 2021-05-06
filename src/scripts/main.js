import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.navigation__button',
    prevEl: '.navigation__button--left',
  },
});

const listOfButtons = document.querySelector('.card__list');
const visibleSlide = document.querySelector('#img');

listOfButtons.addEventListener('click', (event) => {
  const { number } = event.target.dataset;
  visibleSlide.src = `https://raw.githubusercontent.com/natalia-ponomarenko/images-for-test/main/${number}.jpg`;
  return visibleSlide;
});
