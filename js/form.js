(function () {
  "use strict";
  const form = document.querySelector(".feedback-form");
  const fields = document.querySelectorAll(".field");
  const popUpSuccess = document.getElementById("success");
  const popUpFailure = document.getElementById("failure");
  const popUps = document.querySelectorAll(".pop-up__wrapper");
  const popUpButtons = document.querySelectorAll(".pop-up__button");
  const telNumber = document.getElementById("tel");

  //simple validation

  let checkValidity = () => {
    let isValidity = true;
    for (let field of fields) {
      field.style.borderColor = '#f2f2f2';
      if (!field.validity.valid) {
        isValidity = false;
        field.style.borderColor = 'red';
      }
    }
    return isValidity;
  }

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    (!checkValidity()) ? popUpFailure.classList.add("pop-up--show"): popUpSuccess.classList.add("pop-up--show");
  });

  //Pop-ups hidden

  for (let i = 0; i < popUps.length; i++) {
    popUpButtons[i].addEventListener('click', () => {
      popUps[i].classList.remove("pop-up--show")
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        popUps[i].classList.remove("pop-up--show");
      }
    });
  }

  //mask for phone number

  window.addEventListener("DOMContentLoaded", () => {

    function setCursorPosition (pos, elem) {
      elem.focus();

      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }

    function mask () {

      let matrix = "+7 (___) ___ ____";
      let count = 0;
      let def = matrix.replace(/\D/g, "");
      let val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, (a) => {
        return /[_\d]/.test(a) && count < val.length ? val.charAt(count++) : count >= val.length ? "" : a
      });
      if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
    };

    telNumber.addEventListener("input", mask, false);
    telNumber.addEventListener("focus", mask, false);
    telNumber.addEventListener("blur", mask, false);

  });

})()
