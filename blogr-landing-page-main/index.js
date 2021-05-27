const navMobile = document.getElementById("nav-mobile");
const dropdownList = navMobile.querySelectorAll(".dropdown");
const modalMobile = document.getElementById("modal-mobile");
const hamburguer = document.getElementById("hamburguer");

dropdownList.forEach((dropdownItem, key) => {
  dropdownItem.addEventListener("click", (e) => {
    if (e.target.className === "dropdown") {
      dropdownList.forEach((dropdownItem) => {
        dropdownItem.className = "dropdown";
      });
      e.target.className = "dropdown open";
    } else if (e.target.className === "dropdown open") {
      e.target.className = "dropdown";
    }
  });
});

function myFunction() {
  if (navMobile.style.display === "block") {
    hamburguer.setAttribute("src", "./images/icon-hamburger.svg");
    modalMobile.style.display = "none";
    navMobile.style.display = "none";
  } else {
    hamburguer.setAttribute("src", "./images/icon-close.svg");
    navMobile.style.display = "block";
    modalMobile.style.display = "block";
  }
}

window.onclick = function (event) {
  if (event.target == modalMobile) {
    hamburguer.setAttribute("src", "./images/icon-hamburger.svg");
    modalMobile.style.display = "none";
    navMobile.style.display = "none";
  }
};
