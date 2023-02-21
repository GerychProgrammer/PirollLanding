$(document).ready(() => {
  $("#form").submit((e) => {
    e.preventDefault();

    const patternForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

    if ($(".form__buttonAndMessage--successMesage").hasClass("successMesageVisible")) {
      $(".form__buttonAndMessage--successMesage").removeClass("successMesageVisible");
    }

    if ($(".form__buttonAndMessage--faultMesage").hasClass("faultMesageVisible")) {
      $(".form__buttonAndMessage--faultMesage").removeClass("faultMesageVisible");
    }

    if ($('[name = "name"]').val() === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      return console.error("введите верное имя");
    }

    if (!patternForEmail.test($('[name = "email"]').val())) {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      return console.error("введите парвильную почту в формате");
    }

    if ($('[name = "title"]').val() === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      return console.error("введите название заголовка");
    }
    if ($('[name = "comment"]').val() === "") {
      $(".form__buttonAndMessage--faultMesage").addClass("faultMesageVisible");

      return console.error("введите ваше сообщение");
    }

    const data = {
      name: $('[name = "name"]').val(),
      email: $('[name = "email"]').val(),
      title: $('[name = "title"]').val(),
      comment: $('[name = "comment"]').val(),
    };

    console.log(data);

    $("#form")[0].reset();

    $(".form__buttonAndMessage--successMesage").addClass("successMesageVisible");
  });
});

exports.formJquery = formJquery;
