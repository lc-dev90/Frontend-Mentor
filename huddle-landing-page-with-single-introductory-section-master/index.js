const modal = document.getElementById("myModal");
const btn = document.getElementById("register");
const span = document.getElementsByClassName("close")[0];
const formElement = document.getElementById("form");
const emailElement = document.getElementById("email");
const emailElement = document.getElementById("name");
const emailElement = document.getElementById("lastName");
const emailElement = document.getElementById("password");
const emailElement = document.getElementById("password2");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
