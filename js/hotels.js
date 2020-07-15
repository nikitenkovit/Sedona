(function () {
"use strict";

  /*Add hotels on page*/

  let cardsData = [
    {
      title: 'Amara resort \u0026 spa',
      type: 'гостиница',
      price: 4000,
      imgUrl: 'img/hotels/amara-resort.jpg',
      stars: '\u2605\u2605\u2605\u2605',
      reiting: '8,5'
  },
    {
      title: 'Desert quail inn',
      type: 'мотель',
      price: 3000,
      imgUrl: 'img/hotels/quail-inn.jpg',
      stars: '\u2605\u2605\u2605',
      reiting: '8,9'
  },
    {
      title: 'Villas at poco diablo',
      type: 'апартаменты',
      price: 2000,
      imgUrl: 'img/hotels/poco-diablo.jpg',
      stars: '\u2605\u2605',
      reiting: '9,2'
  }
];

  let hotelsList = document.getElementById('hotels__list');
  let templateContent = document.getElementById('template-data').content;
  let newItemTemplate = templateContent.querySelector('.hotels__item');

  let addHotelsOnPage = () => {
    cardsData.forEach((element) => {
      let clonedElement = newItemTemplate.cloneNode(true);
      let newImg = clonedElement.querySelector('.hotels__image');
      let newTitle = clonedElement.querySelector('.hotels__title');
      let newType = clonedElement.querySelector('.hotels__type');
      let newPrice = clonedElement.querySelector('.hotels__min-price');
      let newStars = clonedElement.querySelector('.hotels__stars');
      let newRating = clonedElement.querySelector('.hotels__rating-number');

      newImg.src = element.imgUrl;
      newTitle.textContent = element.title;
      newType.textContent = element.type;
      newPrice.textContent = "От " + element.price + " \u20bd";
      newStars.textContent = element.stars;
      newRating.textContent = "Рейтинг: " + element.reiting;

      hotelsList.appendChild(clonedElement);
    });
  };
  addHotelsOnPage();
})()
