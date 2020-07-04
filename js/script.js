(function () {
  const closeButton = document.querySelector(".main-nav__button-close");
  const openButton = document.querySelector(".main-nav__button-open")
  const navLists = document.querySelectorAll(".main-nav__list")

  openButton.onclick = function () {
    for (let navList of navLists) {
      navList.classList.add("show");
    }
  }

  closeButton.onclick = function () {
    for (let navList of navLists) {
      if (navList.classList.contains("show")) {
        navList.classList.remove("show");
      }
    }
  }
})()
