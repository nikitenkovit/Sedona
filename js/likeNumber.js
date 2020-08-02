(function () {
  "use strict";

  const thumbsUpButtons = document.querySelectorAll(".thumbs-up-button");
  const likesNumbers = document.querySelectorAll(".thumbs-up-button__likes-number");

  for (let i = 0; i < thumbsUpButtons.length; i++) {
    thumbsUpButtons[i].onclick = () => {
      (thumbsUpButtons[i].classList.contains("thumbs-up-button--added")) ? likesNumbers[i].textContent--: likesNumbers[i].textContent++;
      thumbsUpButtons[i].classList.toggle("thumbs-up-button--added");
    };
  }
})()
