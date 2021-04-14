export const formValidation = () => {
  const form = document.getElementById("form");
  const feedback = document.querySelector(".feedback");
  const fields = document.querySelectorAll(".field");
  const popUpSuccess = document.getElementById("success");
  const popUpFailure = document.getElementById("failure");
  const popUps = document.querySelectorAll(".pop-up__wrapper");

  //simple form validation

  const checkValidityChange = (field) => {
    field.onchange = () => {
      field.style.borderColor = '#f2f2f2';
      const fieldValue = field.value;
      if (!field.validity.valid || fieldValue === "0") {
        field.style.borderColor = 'red';
      }
    };
  }

  fields.forEach((elem) => {
    checkValidityChange(elem)
  });

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

  form.onsubmit = (evt) => {
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
};
