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


function changePicture(id){
let image = document.getElementById(id);
  if (el.src.indexOf("images/widget_country_button_on.png")>0){
  el.src="images/widget_country_button_off.png";
}

else{

el.src="images/widget_country_button_on.png";

}

}

