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

const one = document.querySelector('#1');
let visibleSlide = document.querySelector('#img');

one.addEventListener('click', () => {
  visibleSlide.src="./images/2.png";
  console.log('pressed');
});


// onclick.function changePicture(id) {
//   let visibleSlide = document.getElementById('img');
//   console.log(document.getElementById('img'));
//     if (id === 1) {
//       visibleSlide.src="./images/1.jpg";
//     }
  
//     if (id === 2) {
//       visibleSlide.src="./images/2.png";
//     }
  
//     if (id === 3) {
//       visibleSlide.src="./images/3.jpg";
//     }
  
//     if (id === 4) {
//       visibleSlide.src="./images/4.jpg";
//     }
  
//     return visibleSlide;
//   }


