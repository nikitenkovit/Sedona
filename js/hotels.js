(function () {
  "use strict";

  /*Add hotels on page*/

  let arrayHotels = [
    {
      title: 'Amara resort \u0026 spa',
      type: 'гостиница',
      price: 5000,
      imgUrl: 'img/hotels/amara-resort.jpg',
      stars: '\u2605\u2605\u2605\u2605',
      reiting: '8,5',
      isPool: true,
      isParking: true,
      isWiFi: true
  },
    {
      title: 'Desert quail inn',
      type: 'мотель',
      price: 4000,
      imgUrl: 'img/hotels/quail-inn.jpg',
      stars: '\u2605\u2605\u2605',
      reiting: '8,9',
      isPool: false,
      isParking: true,
      isWiFi: true
  },
    {
      title: 'Villas at poco diablo',
      type: 'апартаменты',
      price: 3000,
      imgUrl: 'img/hotels/poco-diablo.jpg',
      stars: '\u2605\u2605',
      reiting: '9,2',
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
      reiting: '8,9',
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
      const newPrice = clonedElement.querySelector('.hotels__min-price');
      const newStars = clonedElement.querySelector('.hotels__stars');
      const newRating = clonedElement.querySelector('.hotels__rating-number');

      newImg.src = element.imgUrl;
      newTitle.textContent = element.title;
      newType.textContent = element.type;
      newPrice.textContent = "От " + element.price + " \u20bd";
      newStars.textContent = element.stars;
      newRating.textContent = "Рейтинг: " + element.reiting;

      hotelsList.appendChild(clonedElement);
    });
  };

  addHotelsOnPage(arrayHotels);




  /*checkboxes for check hotel Infrastructure */

  const poolCheckbox = document.getElementById('pool');
  const parkingChechbox = document.getElementById('parking');
  const wifiCheckbox = document.getElementById('wi-fi');

  const allHotelsItems = hotelsList.querySelectorAll('.hotels__item');

  const checkInfrastructure = () => {
    if (poolCheckbox.checked) {
      let newArrayHotels = arrayHotels.filter((elem) => {
        return elem.isPool;
      });
    }
    return newArrayHotels
  }
      console.log(checkInfrastructure())

/*checkboxes*/

  const allCheckboxes = document.querySelectorAll(".search-hotel-form__checkbox");

  const addCheckHandler = (item) => {
    item.addEventListener('change', function () {
      addHotelsOnPage(newArrayHotels);
      checkInfrastructure();
      checkTypeHotels();
      checkСounterNumber();
    });
  };

  allCheckboxes.forEach((item) => {
    addCheckHandler(item);
  });






  /*checkboxes for check hotel type */

  const hotelCheckbox = document.getElementById('hotel');
  const motelCheckbox = document.getElementById('motel');
  const apartmentsCheckbox = document.getElementById('apartments');

  const checkTypeHotels = () => {
    allHotelsItems.forEach((item) => {
      let hotelsType = item.querySelector('.hotels__type');

      if (hotelCheckbox.checked && !motelCheckbox.checked && !apartmentsCheckbox.checked) {
        (hotelsType.textContent !== 'гостиница') ? item.style.display = "none": item.style.display = "block"
      } else if (!hotelCheckbox.checked && motelCheckbox.checked && !apartmentsCheckbox.checked) {
        (hotelsType.textContent !== 'мотель') ? item.style.display = "none": item.style.display = "block"
      } else if (!hotelCheckbox.checked && !motelCheckbox.checked && apartmentsCheckbox.checked) {
        (hotelsType.textContent !== 'апартаменты') ? item.style.display = "none": item.style.display = "block"
      } else if (hotelCheckbox.checked && motelCheckbox.checked && !apartmentsCheckbox.checked) {
        (hotelsType.textContent == 'гостиница' || hotelsType.textContent == 'мотель') ? item.style.display = "block": item.style.display = "none"
      } else if (hotelCheckbox.checked && !motelCheckbox.checked && apartmentsCheckbox.checked) {
        (hotelsType.textContent == 'гостиница' || hotelsType.textContent == 'апартаменты') ? item.style.display = "block": item.style.display = "none"
      } else if (!hotelCheckbox.checked && motelCheckbox.checked && apartmentsCheckbox.checked) {
        (hotelsType.textContent == 'мотель' || hotelsType.textContent == 'апартаменты') ? item.style.display = "block": item.style.display = "none"
      } else if (hotelCheckbox.checked && motelCheckbox.checked && apartmentsCheckbox.checked) {
        item.style.display = "block";
      } else if (!hotelCheckbox.checked && !motelCheckbox.checked && !apartmentsCheckbox.checked) {
        item.style.display = "block";
      }
    });
  };

  checkTypeHotels();


  /*check quantity hotels*/




  const checkСounterNumber = () => {
    let counterNumber = document.getElementById('counter__number');
    let counter = 0;
    allHotelsItems.forEach((elem) => {
      if (elem.style.display === 'block') counter++
    })
    counterNumber.textContent = counter;
  }
  checkСounterNumber();

})()
