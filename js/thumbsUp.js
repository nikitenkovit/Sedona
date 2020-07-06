(function () {
  let thumbsUpButtons = document.querySelectorAll(".thumbs-up-button");
  let likesNumbers = document.querySelectorAll(".thumbs-up-button__likes-number");

  for (let i = 0; i < thumbsUpButtons.length; i++) {
    thumbsUpButtons[i].onclick = function () {
      if (thumbsUpButtons[i].classList.contains("thumbs-up-button--added")) {
        likesNumbers[i].textContent--;
      } else {
        likesNumbers[i].textContent++;
      }
      thumbsUpButtons[i].classList.toggle("thumbs-up-button--added");
    }
  }
})()
