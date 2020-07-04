(function () {
  const thumbsUpButtons = document.querySelectorAll(".thumbs-up-button");
  let likesNumbers = document.querySelectorAll(".thumbs-up-button__likes-number");

  for (let i = 0; i < thumbsUpButtons.length; i++) {
    thumbsUpButtons[i].onclick = function () {
      if (thumbsUpButtons[i].classList.contains("thumbs-up-button--positive")) {
        thumbsUpButtons[i].classList.remove("thumbs-up-button--positive");
        likesNumbers[i].textContent--;
      } else {
        thumbsUpButtons[i].classList.add("thumbs-up-button--positive");
        likesNumbers[i].textContent++;
      }
    }
  }
})()
