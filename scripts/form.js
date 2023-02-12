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

  if (successMesage.classList.contains("successMesageVisible")) {
    successMesage.classList.remove("successMesageVisible");
  }

  if (faultMesage.classList.contains("faultMesageVisible")) {
    faultMesage.classList.remove("faultMesageVisible");
  }

  if (name.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    return console.error("введите верное имя");
  }

  if (!patternForEmail.test(email.value)) {
    faultMesage.classList.add("faultMesageVisible");

    return console.error("введите парвильную почту в формате");
  }

  if (title.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    return console.error("введите название заголовка");
  }
  if (comment.value === "") {
    faultMesage.classList.add("faultMesageVisible");

    return console.error("введите ваше сообщение");
  }

  const data = {
    name: name.value,
    email: email.value,
    title: title.value,
    comment: comment.value,
  };

  name.value = "";
  email.value = "";
  title.value = "";
  comment.value = "";

  successMesage.classList.add("successMesageVisible");

  console.log(data);
});
