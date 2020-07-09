(function () {
  "use strict";
  //show and hidden main navigation
  const closeButton = document.querySelector(".main-nav__button-close");
  const openButton = document.querySelector(".main-nav__button-open");
  const navLists = document.querySelectorAll(".main-nav__list");

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
})()
