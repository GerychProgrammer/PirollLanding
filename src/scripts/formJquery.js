import * as $ from "jquery";

export default $(document).ready(() => {
  $("#form").submit((e) => {
    e.preventDefault();

    const patternForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

    const data = {
      name: $('[name = "name"]').val(),
      email: $('[name = "email"]').val(),
      title: $('[name = "title"]').val(),
      comment: $('[name = "comment"]').val(),
    };

    const errors = {
      nameError: "",
      emailError: "",
      titleError: "",
      commentError: "",
    };

    const checkingWhereError = () => {
      if (errors.nameError !== "") {
        $(".main__contactUs--form--errorTextName").addClass("showErrorMessage");
        $('[name = "name"]').addClass("inputError");
      }

      if (errors.emailError !== "") {
        $(".main__contactUs--form--errorTextEmail").addClass("showErrorMessage");
        $('[name = "email"]').addClass("inputError");
      }

      if (errors.titleError !== "") {
        $(".main__contactUs--form--errorTextTitle").addClass("showErrorMessage");
        $('[name = "title"]').addClass("inputError");
      }

      if (errors.commentError !== "") {
        $(".main__contactUs--form--errorTextComment").addClass("showErrorMessage");
        $('[name = "comment"]').addClass("inputError");
      }
      return;
    };

    if ($(".form__buttonAndMessage--successMesage").hasClass("successMesageVisible")) {
      $(".form__buttonAndMessage--successMesage").removeClass("successMesageVisible");
    }

    if ($(".form__buttonAndMessage--faultMesage").hasClass("faultMesageVisible")) {
      $(".form__buttonAndMessage--faultMesage").removeClass("faultMesageVisible");
    }

    if (data.name === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      errors.nameError = "введите верное имя";
    }

    if (!patternForEmail.test(data.email)) {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      errors.emailError = "введите парвильную почту в формате";
    }

    if (data.title === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      errors.titleError = "введите название заголовка";
    }
    if (data.comment === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      errors.commentError = "введите ваше сообщение";
    }

    for (const key in errors) {
      if (errors[key] !== "") {
        checkingWhereError();
        return;
      }
    }

    console.log(data);

    $("#form")[0].reset();

    $(".form__buttonAndMessage--successMesage").addClass("successMesageVisible");
  });
});
