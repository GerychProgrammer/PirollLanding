const menuButton = document.querySelector(".header__menuButton");

menuButton.addEventListener("click", (e) => {
  const menu = document.querySelector(".header__navigation--navigateButtons");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

exports.menuButton = menuButton;
