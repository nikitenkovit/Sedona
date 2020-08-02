(function () {
  "use strict";
  const form = document.getElementById("form");
  const feedback = document.querySelector(".feedback");
  const fields = document.querySelectorAll(".field");
  const popUpSuccess = document.getElementById("success");
  const popUpFailure = document.getElementById("failure");
  const popUps = document.querySelectorAll(".pop-up__wrapper");
  const telNumber = document.getElementById("tel");

  //simple form validation

  const checkValidityChange = field => {
    field.onchange = () => {
      field.style.borderColor = '#f2f2f2';
      const fieldValue = field.value;
      if (!field.validity.valid || fieldValue === "0")
        field.style.borderColor = 'red';
    };
  }

  fields.forEach(elem => checkValidityChange(elem));

  const checkValidityAll = () => {
    let isValidity = true;
    fields.forEach(field => {
      const fieldValue = field.value;
      field.style.borderColor = '#f2f2f2';
      if (!field.validity.valid || fieldValue <= 0) {
        isValidity = false;
        field.style.borderColor = 'red';
      }
    })
    return isValidity;
  }

  form.onsubmit = evt => {
    if (feedback)
      evt.preventDefault();
    if (!checkValidityAll()) {
      popUpFailure.classList.add("pop-up--show");
      evt.preventDefault();
    } else {
      popUpSuccess.classList.add("pop-up--show");
    }
  };

  //Pop-ups hidden

  popUps.forEach(elem => {
    elem.onclick = () => {
      elem.classList.remove("pop-up--show");
    };

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        elem.classList.remove("pop-up--show");
      }
    });
  });

  //mask for phone number

  window.addEventListener("DOMContentLoaded", () => {

    const setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }

    function mask() {

      const matrix = "+7 (___) ___ ____";
      let count = 0;
      let def = matrix.replace(/\D/g, "");
      let val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, (a) => {
        return /[_\d]/.test(a) && count < val.length ? val.charAt(count++) : count >= val.length ? "" : a
      });
      if (event.type == "blur") {
        if (this.value.length === 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
    }

    if (telNumber) {
      telNumber.addEventListener("input", mask, false);
      telNumber.addEventListener("focus", mask, false);
      telNumber.addEventListener("blur", mask, false);
    }
  });
})()
