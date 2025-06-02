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

const parentContainer = document.querySelector('.pp-container-2-subcontainer-2');

parentContainer.addEventListener('click', event=>{

  const current = event.target;

  const isReadMoreBtn = current.className.includes('read-more-btn');

  if(!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector('.read-more-text');

  currentText.classList.toggle('read-more-text--show');

  current.textContent = current.textContent.includes('Show More') ?
  "Show Less..." : "Show More..."
})
