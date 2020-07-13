(function () {
"use strict";
  //show and hidden main navigation
  const closeButton = document.querySelector(".main-nav__button-close");
  const openButton = document.querySelector(".main-nav__button-open");
  const navLists = document.querySelectorAll(".main-nav__list");
  const hotelsButton = document.getElementById("hotelsButton");
  const searchForm = document.querySelector(".search-form")

  openButton.addEventListener('click', () => {
    for (let navList of navLists) {
      navList.classList.add("show");
    }
  });

  closeButton.addEventListener('click', () => {
    for (let navList of navLists) {
      navList.classList.remove("show");
    }
  });

  // toggle hotels button
  if (hotelsButton) {
    hotelsButton.addEventListener('click', () => {
      searchForm.classList.toggle("search-form-show")
    });
  }

  //counter in search hotels form
  const buttonMinusAdalt = document.getElementById("adult-minus");
  const buttonPlusAdalt = document.getElementById("adult-plus");
  const buttonMinusKids = document.getElementById("kids-minus");
  const buttonPlusKids = document.getElementById("kids-plus");
  let counterAdult = document.getElementById("adult");
  let counterKids = document.getElementById("kids");

  let changeCounter = (buttonMinus, buttonPlus, counter) => {
    buttonMinus.addEventListener('click', () => {
      if (counter.value > 0) {
        counter.value--;
      }
    });
    buttonPlus.addEventListener('click', () => {
      counter.value++;
    });
  }

  if (counterAdult) {
    changeCounter(buttonMinusAdalt, buttonPlusAdalt, counterAdult);
  }
  if (counterKids) {
  changeCounter(buttonMinusKids, buttonPlusKids, counterKids);
  }
})()
