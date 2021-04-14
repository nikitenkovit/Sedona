import {DEFAULT_SORTING_TYPE, DEFAULT_SORTING_DIRECTION, SortingType} from "./const";
import {hotelsTypeAdapter} from "./utils";

export default class Hotels {
  constructor(hotelsArray, hotelsList, itemTemplate) {
    this._hotelsArray = hotelsArray;
    this._hotelsList = hotelsList;
    this._templateContent = itemTemplate.content;
    this._newItemTemplate = this._templateContent.querySelector('.hotels__item');
    this._counter = document.getElementById(`counter__number`);
    this._allCheckbox = document.querySelectorAll(`.search-hotel-form__checkbox`);
    this._submitButton = document.querySelector(`.search-hotel-form__button`);
    this._sortingTypeButtons = document.querySelectorAll(`.sorting__type`);
    this._sortingDirectionButtons = document.querySelectorAll(`.switches__direction`);
    this._sortingType = DEFAULT_SORTING_TYPE;
    this._sortingDirection = DEFAULT_SORTING_DIRECTION;

    this._addHotelsOnPage = this._addHotelsOnPage.bind(this)
  }

  init() {
    this._addHotelsOnPage();

    this._handleCheckboxChange();
    this._handleSubmitButtonClick();
    this._handleSortingTypeChange();
    this._handleSortingDirectionChange();
  }

  _sorting() {
    const type = this._sortingType;

    return this._hotelsArray.slice().sort((a, b) => {

      switch (this._sortingDirection) {
        case SortingType.down: {
          return b[type] - a[type];
        }
        case SortingType.up: {
          return a[type] - b[type];
        }
      }
    });
  }

  _changeCounter(array) {
    this._counter.textContent = array.length;
  }

  _addHotelsOnPage() {
    this._removeAllElements();

    this._sortedArray = this._sorting();

    this._filteredArray = this._searchByAllConditions(this._sortedArray);

    this._filteredArray.forEach((element) => {
      const clonedElement = this._newItemTemplate.cloneNode(true);
      const newImg = clonedElement.querySelector('.hotels__image');
      const newTitle = clonedElement.querySelector('.hotels__title');
      const newType = clonedElement.querySelector('.hotels__type');
      const newPrice = clonedElement.querySelector('.hotels__min-price-number');
      const newStars = clonedElement.querySelector('.hotels__stars');
      const newRating = clonedElement.querySelector('.hotels__rating-number');

      newImg.src = element.imgUrl;
      newTitle.textContent = element.title;
      newType.textContent = hotelsTypeAdapter(element.type);
      newPrice.textContent = element.price;
      newStars.textContent = element.stars;
      newRating.textContent = "Рейтинг: " + element.rating;

      this._hotelsList.appendChild(clonedElement);
    });

    this._changeCounter(this._filteredArray);
  }

  _removeAllElements() {
    this._hotelsList.innerHTML = "";
  };

  _checkInfrastructure() {
    const infrastructure = document.querySelector(`.search-hotel-form__group--infrastructure`);
    const allCheckboxes = infrastructure.querySelectorAll(".search-hotel-form__checkbox");

    return [...allCheckboxes].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.name);
  }

  _checkType() {
    const habitation = document.querySelector(`.search-hotel-form__group--habitation`);
    const allCheckboxes = habitation.querySelectorAll(".search-hotel-form__checkbox");

    return [...allCheckboxes].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.name);
  }

  _checkPrice() {
    let minPrice = parseInt(document.getElementById('inpt1').value, 10);
    let maxPrice = parseInt(document.getElementById('inpt2').value, 10);

    if (minPrice > maxPrice) {
      let swap = minPrice;
      minPrice = maxPrice;
      maxPrice = swap;
    }

    return [minPrice, maxPrice]
  }

  _searchByAllConditions(array) {
    const infrastructure = this._checkInfrastructure();
    const type = this._checkType();
    const [minPrice, maxPrice] = this._checkPrice();

    const filteredArrayByInfrastructure = array.slice().filter((hotel) => {
      if (infrastructure.length < 1) {
        return array
      }
      return infrastructure.every((it) => hotel[it])
    })

    const filteredInfrastructureByType = filteredArrayByInfrastructure.filter((hotel) => {
      if (type < 1) {
        return filteredArrayByInfrastructure
      }
      return type.some((it) => hotel.type === it)
    })

    return filteredInfrastructureByType.filter((hotel) => hotel.price >= minPrice && hotel.price <= maxPrice);
  }

  _handleCheckboxChange() {
    this._allCheckbox.forEach((checkbox) => {
      checkbox.addEventListener(`click`, this._addHotelsOnPage);
    });
  }

  _handleSubmitButtonClick() {
    this._submitButton.addEventListener(`click`, (event) => {
      event.preventDefault();

      this._addHotelsOnPage();
    })
  }

  _handleSortingTypeChange() {
    this._sortingTypeButtons.forEach((type) => {
      type.addEventListener(`change`, (event) => {
        this._sortingType = event.target.value;

        this._addHotelsOnPage();
      });
    });
  }

  _handleSortingDirectionChange() {
    this._sortingDirectionButtons.forEach((direction) => {
      direction.addEventListener(`change`, (event) => {
        this._sortingDirection = event.target.value;

        this._addHotelsOnPage();
      })
    })
  }
}
