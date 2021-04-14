(function () {
    "use strict";

    const thumbsUpButtons = document.querySelectorAll(".thumbs-up-button");
    const likesNumbers = document.querySelectorAll(".thumbs-up-button__likes-number");

    thumbsUpButtons.forEach((it, index) => {
        it.addEventListener(`click`, () => {
            it.classList.contains("thumbs-up-button--added")
                ? likesNumbers[index].textContent--
                : likesNumbers[index].textContent++;

            it.classList.toggle("thumbs-up-button--added");
        });
    });
})()
