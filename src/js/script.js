(function () {
  "use strict";

  //show and hidden main navigation

  const closeButton = document.querySelector(".main-nav__button-close");
  const openButton = document.querySelector(".main-nav__button-open");
  const navLists = document.querySelectorAll(".main-nav__list");
  const hotelsButton = document.getElementById("hotelsButton");
  const searchForm = document.querySelector(".search-form")

  openButton.addEventListener(`click`, () => {
    navLists.forEach((item) => item.classList.toggle("show"));
  });

  closeButton.addEventListener(`click`, () => {
    navLists.forEach((item) => item.classList.remove("show"));
  });

  // toggle hotels button

  if (hotelsButton) {
    hotelsButton.addEventListener(`click`, () => {
      searchForm.classList.toggle("search-form-show");
    });
  }

  //counter in search hotels form

  const buttonMinusAdalt = document.getElementById("adult-minus");
  const buttonPlusAdalt = document.getElementById("adult-plus");
  const buttonMinusKids = document.getElementById("kids-minus");
  const buttonPlusKids = document.getElementById("kids-plus");
  const counterAdult = document.getElementById("adult");
  const counterKids = document.getElementById("kids");

  const changeCounter = (buttonMinus, buttonPlus, counter) => {
    buttonMinus.onclick = () => {
      if (counter.value > 0) {
        counter.value--;
      }
    };
    buttonPlus.onclick = () => {
      counter.value++;
    };
  };

  if (counterAdult) {
    changeCounter(buttonMinusAdalt, buttonPlusAdalt, counterAdult);
  }
  if (counterKids) {
    changeCounter(buttonMinusKids, buttonPlusKids, counterKids);
  }
})()
