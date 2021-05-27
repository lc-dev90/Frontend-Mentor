const navMobile = document.getElementById("nav-mobile");
const dropdownList = navMobile.querySelectorAll(".dropdown");
const modalMobile = document.getElementById("modal-mobile");

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
    modalMobile.style.display = "none";
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "block";
    modalMobile.style.display = "block";
  }
}

window.onclick = function (event) {
  if (event.target == modalMobile) {
    modalMobile.style.display = "none";
    navMobile.style.display = "none";
  }
};
