const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector('[name = "name"]');
  const email = document.querySelector('[name = "email"]');
  const title = document.querySelector('[name = "title"]');
  const comment = document.querySelector('[name = "comment"]');

  const successMesage = document.querySelector(".form__buttonAndMessage--successMesage");
  const faultMesage = document.querySelector(".form__buttonAndMessage--faultMesage");

  const patternForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  const FORM_INPUT_CONFIG = {
    name: {
      className: "main__contactUs--form--name",
    },
    email: {
      className: "main__contactUs--form--email",
    },
    title: {
      className: "main__contactUs--form--title", 
    },
    comment: {
      className: "main__contactUs--form--comment",
    },
  }

  
  const getErrors = () => {
    const errors = {};

    if (name.value === "") {
      errors.name = "введите верное имя";
    }
    if (!patternForEmail.test(email.value)) {
      errors.email = "введите парвильную почту в формате";
    }
    if (title.value === "") {
      errors.title = "введите название заголовка";
    }
    if (comment.value === "") {
      errors.comment = "введите ваше сообщение";
    }
    
    return errors
  }

  const errors = getErrors()

  if (!Object.keys(errors).length) {
    name.value = "";
    email.value = "";
    title.value = "";
    comment.value = "";

    if (faultMesage.classList.contains("faultMesageVisible")) {
      faultMesage.classList.remove("faultMesageVisible");
    }

    for (key in FORM_INPUT_CONFIG) {
      document.querySelector(`.${FORM_INPUT_CONFIG[key].className} > span`).classList.remove("showErrorMessage");
      document.querySelector(`.${FORM_INPUT_CONFIG[key].className} > input, .${FORM_INPUT_CONFIG[key].className} > textarea`).classList.remove("inputError");
    }

    successMesage.classList.add("successMesageVisible");
    console.log('Success');
  } else {
    for (key in errors) {
      document.querySelector(`.${FORM_INPUT_CONFIG[key].className} > span`).classList.add("showErrorMessage");
      document.querySelector(`.${FORM_INPUT_CONFIG[key].className} > input, .${FORM_INPUT_CONFIG[key].className} > textarea`).classList.add("inputError");
    }

    if (successMesage.classList.contains("successMesageVisible")) {
      successMesage.classList.remove("successMesageVisible");
    }

    if (faultMesage.classList.contains("faultMesageVisible")) {
      faultMesage.classList.remove("faultMesageVisible");
    }

    faultMesage.classList.add("faultMesageVisible");
  }  
});

exports.form = form;