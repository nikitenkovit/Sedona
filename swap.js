(function () {
  "use strict";

  /*Add hotels on page*/

  let arrayHotels = [
    {
      title: 'Desert quail inn',
      type: 'мотель',
      price: 4000,
      imgUrl: 'img/hotels/quail-inn.jpg',
      stars: '\u2605\u2605\u2605',
      rating: 8.9,
      isPool: false,
      isParking: true,
      isWiFi: true
  },
    {
      title: 'Amara resort \u0026 spa',
      type: 'гостиница',
      price: 5000,
      imgUrl: 'img/hotels/amara-resort.jpg',
      stars: '\u2605\u2605\u2605\u2605',
      rating: 8.5,
      isPool: true,
      isParking: true,
      isWiFi: true
  },
    {
      title: 'Villas at poco diablo',
      type: 'апартаменты',
      price: 3000,
      imgUrl: 'img/hotels/poco-diablo.jpg',
      stars: '\u2605\u2605',
      rating: 9.2,
      isPool: false,
      isParking: true,
      isWiFi: false
  },
    {
      title: 'Sugar Loaf Lodge',
      type: 'мотель',
      price: 2000,
      imgUrl: 'img/hotels/Sugar-Loaf-Lodge.jpg',
      stars: '\u2605\u2605',
      rating: 8.9,
      isPool: true,
      isParking: false,
      isWiFi: true
  }
];

  const hotelsList = document.getElementById('hotels__list');
  const templateContent = document.getElementById('template-data').content;
  const newItemTemplate = templateContent.querySelector('.hotels__item');

  const addHotelsOnPage = (array) => {
    array.forEach((element) => {
      const clonedElement = newItemTemplate.cloneNode(true);
      const newImg = clonedElement.querySelector('.hotels__image');
      const newTitle = clonedElement.querySelector('.hotels__title');
      const newType = clonedElement.querySelector('.hotels__type');
      const newPrice = clonedElement.querySelector('.hotels__min-price-number');
      const newStars = clonedElement.querySelector('.hotels__stars');
      const newRating = clonedElement.querySelector('.hotels__rating-number');

      newImg.src = element.imgUrl;
      newTitle.textContent = element.title;
      newType.textContent = element.type;
      newPrice.textContent = element.price;
      newStars.textContent = element.stars;
      newRating.textContent = "Рейтинг: " + element.rating;

      hotelsList.appendChild(clonedElement);
    });
  };

  addHotelsOnPage(arrayHotels);

  const allHotelsItems = hotelsList.children;

  const removeAllElements = () => {
    for (let elem of allHotelsItems) {
      elem.remove();
    };
    for (let elem of allHotelsItems) {
      elem.remove();
    };
    for (let elem of allHotelsItems) {
      elem.remove();
    };
  };

  /*checkboxes*/

  const allInfrastructureCheckboxes = document.querySelectorAll(".infrastructure__checkbox");
  const allTypeCheckboxes = document.querySelectorAll(".type__checkbox");

  const addCheckHandlerForInfrastructure = (item) => {
    item.addEventListener('change', function () {
      removeAllElements();
      addHotelsOnPage(checkInfrastructure());

      //checkDoubleRange();
      checkСounterNumber();
    });
  };

  allInfrastructureCheckboxes.forEach((item) => {
    addCheckHandlerForInfrastructure(item);
  });

  const addCheckHandlerForType = (item) => {
    item.addEventListener('change', function () {
      removeAllElements();
      addHotelsOnPage(arrayHotels);
      checkInfrastructure();
      checkTypeHotels();
      checkDoubleRange();
      checkСounterNumber();
    });
  };

  allTypeCheckboxes.forEach((item) => {
    addCheckHandlerForType(item);
  });

  /*checkboxes for check hotel Infrastructure */

  const poolCheckbox = document.getElementById('pool');
  const parkingChechbox = document.getElementById('parking');
  const wifiCheckbox = document.getElementById('wi-fi');

  const checkInfrastructure = () => {
    let NewArrayHotels = [];

    NewArrayHotels = arrayHotels.filter((item) => {
      if (poolCheckbox.checked && !parkingChechbox.checked && !wifiCheckbox.checked) {
        return item.isPool;
      } else if (!poolCheckbox.checked && parkingChechbox.checked && !wifiCheckbox.checked) {
        return item.isParking;
      } else if (!poolCheckbox.checked && !parkingChechbox.checked && wifiCheckbox.checked) {
        return item.isWiFi;
      } else if (poolCheckbox.checked && parkingChechbox.checked && !wifiCheckbox.checked) {
        return item.isPool && item.isParking;
      } else if (poolCheckbox.checked && !parkingChechbox.checked && wifiCheckbox.checked) {
        return item.isPool && item.isWiFi;
      } else if (!poolCheckbox.checked && parkingChechbox.checked && wifiCheckbox.checked) {
        return item.isParking && item.isWiFi;
      } else if (poolCheckbox.checked && parkingChechbox.checked && wifiCheckbox.checked) {
        return item.isPool && item.isParking && item.isWiFi;
      };
    });
    return NewArrayHotels;
  };
console.log(checkInfrastructure())
  /*checkboxes for check hotel type */

  const hotelCheckbox = document.getElementById('hotel');
  const motelCheckbox = document.getElementById('motel');
  const apartmentsCheckbox = document.getElementById('apartments');

  const checkTypeHotels = () => {
    for (let item of allHotelsItems) {
      let hotelsType = item.querySelector('.hotels__type');

      if (hotelCheckbox.checked && !motelCheckbox.checked && !apartmentsCheckbox.checked) {
        if (hotelsType.textContent !== 'гостиница') {
          item.style.display = "none";
        };
      } else if (!hotelCheckbox.checked && motelCheckbox.checked && !apartmentsCheckbox.checked) {
        if (hotelsType.textContent !== 'мотель') {
          item.style.display = "none";
        };
      } else if (!hotelCheckbox.checked && !motelCheckbox.checked && apartmentsCheckbox.checked) {
        if (hotelsType.textContent !== 'апартаменты') {
          item.style.display = "none";
        }
      } else if (hotelCheckbox.checked && motelCheckbox.checked && !apartmentsCheckbox.checked) {
        if (hotelsType.textContent === 'апартаменты') {
          item.style.display = "none";
        };
      } else if (hotelCheckbox.checked && !motelCheckbox.checked && apartmentsCheckbox.checked) {
        if (hotelsType.textContent === 'мотель') {
          item.style.display = "none";
        };
      } else if (!hotelCheckbox.checked && motelCheckbox.checked && apartmentsCheckbox.checked) {
        if (hotelsType.textContent === 'гостиница') {
          item.style.display = "none";
        };
      };
    };
  };



  /*Check double range*/

  const searchHotelForm = document.getElementById('search-hotel-form');

  const checkDoubleRange = () => {
    let minPrice = document.getElementById('inpt1').value;
    let maxPrice = document.getElementById('inpt2').value;

    if (minPrice > maxPrice) {
      let swap = minPrice;
      minPrice = maxPrice;
      maxPrice = swap;
    };

    for (let item of allHotelsItems) {
      let hotelPrice = item.querySelector('.hotels__min-price-number').textContent;
      let price = parseInt(hotelPrice, 10);
      (price < minPrice || price > maxPrice) ? item.style.display = "none": item.style.display = "block"
    };
    checkInfrastructure();
    checkTypeHotels();
    checkСounterNumber();
  };

  searchHotelForm.onsubmit = (evt) => {
    evt.preventDefault();
    checkDoubleRange();
  };

  /*check quantity hotels*/

  const checkСounterNumber = () => {
    const counterNumber = document.getElementById('counter__number');
    let counter = 0;
    for (let elem of allHotelsItems) {
      if (elem.style.display === 'block') counter++
    }
    counterNumber.textContent = counter;
  }
  checkСounterNumber();


  /*sorting*/

  const allSwitchesButton = document.querySelectorAll('.switches__button');
  const switchUp = document.getElementById('switchUp');
  const switchDown = document.getElementById('switchDown');
  const allSortingButton = document.querySelectorAll('.sorting__button');
  const byPrice = document.getElementById('byPrice');
  const byType = document.getElementById('byType');
  const byRating = document.getElementById('byRating');

  /*sorting__switches up down*/

  const checkSwitchesButton = (item) => {
    item.onclick = () => {
      allSwitchesButton.forEach((elem) => {

        if (elem.classList.contains('switch--active')) {
          elem.classList.remove('switch--active');
        };
      });
      item.classList.add('switch--active');
      if (byPrice.classList.contains('sorting__button--active')) {
        sortingFuncton('price', checkSwitchesResult());
      };
      if (byType.classList.contains('sorting__button--active')) {
        sortingFuncton('type', checkSwitchesResult());
      };
      if (byRating.classList.contains('sorting__button--active')) {
        sortingFuncton('rating', checkSwitchesResult());
      };
    };
  };

  allSwitchesButton.forEach((item) => {
    checkSwitchesButton(item);
  });

  const checkSwitchesResult = () => {
    let switchesResult = 0;
    if (switchUp.classList.contains('switch--active')) switchesResult = 'up';
    if (switchDown.classList.contains('switch--active')) switchesResult = 'down';
    return switchesResult;
  }

  /*sorting__buttons*/

  const addHandlerForCheckButton = (item) => {
    item.onclick = () => {
      allSortingButton.forEach((elem) => {
        if (elem.classList.contains('sorting__button--active')) {
          elem.classList.remove('sorting__button--active');
        };
      });
      item.classList.add('sorting__button--active');

      if (item.classList.contains('sorting__button--active')) {
        if (item.textContent === 'По цене') {
          sortingFuncton('price', checkSwitchesResult());
        };
        if (item.textContent === 'По типу') {
          sortingFuncton('type', checkSwitchesResult());
        };
        if (item.textContent === 'По рейтингу') {
          sortingFuncton('rating', checkSwitchesResult());
        };
      };
    };
  };

  allSortingButton.forEach((item) => {
    addHandlerForCheckButton(item);
  });

  const sortingFuncton = (from, switcher) => {
    let sortedArrayHotels = [];
    sortedArrayHotels = arrayHotels.sort((a, b) => {
      if (switcher == 'down') {
        if (a[from] > b[from]) return -1;
        if (a[from] < b[from]) return 1;
        if (a[from] === b[from]) return 0;
      };
      if (switcher == 'up') {
        if (a[from] > b[from]) return 1;
        if (a[from] < b[from]) return -1;
        if (a[from] === b[from]) return 0;
      };
    });
    removeAllElements();
    addHotelsOnPage(sortedArrayHotels);
    checkInfrastructure();
    checkTypeHotels();
    checkDoubleRange();
    checkСounterNumber();
  };

  //sortingFuncton(checkSwitchesResult(), "price");

})()
