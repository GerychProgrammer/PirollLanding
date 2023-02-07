let showMenu = () => {
  let menu = document.getElementsByClassName(
    "header__navigation--navigateButtons"
  )[0];

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
};
