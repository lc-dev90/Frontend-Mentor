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
  if (lastName === "") {
    showError(lastNameElement, arrError[1]);
  } else {
    showSuccess(lastNameElement);
  }
  if (email === "") {
    showError(emailElement, arrError[2]);
  } else if (!isValid(email)) {
    showError(emailElement, arrError[3]);
  } else {
    showSuccess(emailElement);
  }
  if (password === "") {
    showError(passwordElement, arrError[4]);
  } else {
    showSuccess(passwordElement);
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

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
