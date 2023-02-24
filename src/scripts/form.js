const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector('[name = "name"]');
  const email = document.querySelector('[name = "email"]');
  const title = document.querySelector('[name = "title"]');
  const comment = document.querySelector('[name = "comment"]');

  const successMesage = document.querySelector(".form__buttonAndMessage--successMesage");
  const faultMesage = document.querySelector(".form__buttonAndMessage--faultMesage");

  const errorTextName = document.querySelector(".main__contactUs--form--errorTextName");
  const errorTextEmail = document.querySelector(".main__contactUs--form--errorTextEmail");
  const errorTextTitle = document.querySelector(".main__contactUs--form--errorTextTitle");
  const errorTextComment = document.querySelector(".main__contactUs--form--errorTextComment");

  const patternForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  const data = {
    name: name.value,
    email: email.value,
    title: title.value,
    comment: comment.value,
  };

  const errors = {
    nameError: "",
    emailError: "",
    titleError: "",
    commentError: "",
  };

  const checkingWhereError = () => {
    if (errors.nameError !== "") {
      errorTextName.classList.add("showErrorMessage");
      name.classList.add("inputError");
    }

    if (errors.emailError !== "") {
      errorTextEmail.classList.add("showErrorMessage");
      email.classList.add("inputError");
    }

    if (errors.titleError !== "") {
      errorTextTitle.classList.add("showErrorMessage");
      title.classList.add("inputError");
    }

    if (errors.commentError !== "") {
      errorTextComment.classList.add("showErrorMessage");
      comment.classList.add("inputError");
    }

    return;
  };

  if (successMesage.classList.contains("successMesageVisible")) {
    successMesage.classList.remove("successMesageVisible");
  }

  if (faultMesage.classList.contains("faultMesageVisible")) {
    faultMesage.classList.remove("faultMesageVisible");
  }

  if (name.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    errors.nameError = "введите верное имя";
  }

  if (!patternForEmail.test(email.value)) {
    faultMesage.classList.add("faultMesageVisible");

    errors.emailError = "введите парвильную почту в формате";
  }

  if (title.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    errors.titleError = "введите название заголовка";
  }
  if (comment.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    errors.commentError = "введите ваше сообщение";
  }

  console.log(data);

  for (const key in errors) {
    if (errors[key] !== "") {
      checkingWhereError();
      return;
    }
  }

  name.value = "";
  email.value = "";
  title.value = "";
  comment.value = "";

  successMesage.classList.add("successMesageVisible");
});

exports.form = form;
