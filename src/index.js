import './styles/normalize.css';
import './styles/main.scss';
import './simple-calendar/tcal.css'

import './simple-calendar/tcal'
import './js/script';
import './js/form';
import './js/likeNumber';
import {formValidation} from "./js/form";
import {phoneMask} from "./js/phone-mask";
import {init2slider} from "./js/dobleSlider";
import {arrayHotels} from "./js/hotels-mock";
import Hotels from "./js/hotels";

const form = document.getElementById(`form`);

if (form) {
  formValidation();
}

phoneMask();

const range = document.getElementById(`range`);

if (range) {
  init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');

  window.addEventListener(`resize`, () => {
    init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');
  });
}

const hotelsList = document.getElementById('hotels__list');

if (hotelsList) {
  const itemTemplate = document.getElementById('template-data');

  const hotels = new Hotels(arrayHotels, hotelsList, itemTemplate);

  hotels.init();
}