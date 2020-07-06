(function () {
  "use strict";
  //show and hidden main navigation
  let closeButton = document.querySelector(".main-nav__button-close");
  let openButton = document.querySelector(".main-nav__button-open");
  let navLists = document.querySelectorAll(".main-nav__list");

  openButton.addEventListener('click', function () {
    for (let navList of navLists) {
      navList.classList.add("show");
    }
  });

  closeButton.addEventListener('click', function () {
    for (let navList of navLists) {
      if (navList.classList.contains("show")) {
        navList.classList.remove("show");
      }
    }
  });

  //Pop-up
  let popUps = document.querySelectorAll(".pop-up__wrapper");
  let popUpButtons = document.querySelectorAll(".pop-up__button");
  let formButton = document.querySelector(".feedback-form__button");
  let popUpSuccess = document.getElementById("success");

  formButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popUpSuccess.classList.add("pop-up--show");
  })

  for (let i = 0; i < popUps.length; i++) {
    popUpButtons[i].addEventListener('click', function () {
      popUps[i].classList.remove("pop-up--show")
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        popUps[i].classList.remove("pop-up--show");
      }
    });
  }
})()
