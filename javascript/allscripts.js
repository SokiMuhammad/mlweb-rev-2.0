let meuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "50vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-container");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-container-scrolled");
  } else {
    navbar.classList.remove("navbar-container-scrolled");
  }
});
