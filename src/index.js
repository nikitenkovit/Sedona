import './styles/normalize.css';
import './styles/main.scss';
import './styles/cssworld.ru-xcal.css'

import './js/script';
import './js/cssworld.ru-xcal-en.js';
import './js/form';
import './js/likeNumber';

import {formValidation} from "./js/form";
import {phoneMask} from "./js/phone-mask";
import {init2slider} from "./js/dobleSlider";
import {arrayHotels} from "./js/hotels-mock";
import Hotels from "./js/hotels";
const hotelsList = document.getElementById('hotels__list');
const form = document.getElementById(`form`);
const range = document.getElementById(`range`);

xCal.all("datepicker")

if (form) {
  formValidation();
  phoneMask();
}

if (range) {
  init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');

  window.addEventListener(`resize`, () => {
    init2slider('range', 'rangeBetween', 'btn1', 'btn2', 'inpt1', 'inpt2');
  });
}

if (hotelsList) {
  const itemTemplate = document.getElementById('template-data');

  const hotels = new Hotels(arrayHotels, hotelsList, itemTemplate);

  hotels.init();
}
