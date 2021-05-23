const firstNameElement = document.getElementById("input-name");
const lastNameElement = document.getElementById("input-last-name");
const passwordElement = document.getElementById("input-password");
const emailElement = document.getElementById("input-email");
const formElement = document.getElementById("form");

const arrError = [
  "First name cannot be empty",
  "Last name cannot be empty",
  "Email cannot be empty",
  "Looks like is not an email",
  "Password cannot be empty",
];

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = firstNameElement.value;
  const lastName = lastNameElement.value;
  const password = passwordElement.value;
  const email = emailElement.value;
  if (firstName === "") {
    showError(firstNameElement, arrError[0]);
  } else {
    showSuccess(firstNameElement);
  }
});

function showError(input, msg) {
  const formControl = input.parentElement.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement.parentElement;
  formControl.className = "form-control success";
}
