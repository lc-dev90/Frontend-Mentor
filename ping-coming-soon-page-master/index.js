const formElement = document.getElementById("form");
const emailElement = document.getElementById("email");
const small = document.querySelector("small");
const modalElement = document.getElementById("modal");
const modalTextElement = document.getElementById("modal-text");
const span = document.getElementsByClassName("close")[0];
const buttonClose = document.getElementById("buttonClose");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailElement.value === "") {
    throwError("Please provide your email");
  } else if (!isValid(emailElement.value)) {
    throwError("Please provide a valid email adress");
  } else {
    throwSuccess();
    modalElement.style.display = "block";
  }
});

function throwError(msg) {
  const formContol = emailElement.parentElement.parentElement;
  formContol.className = "form-control error";
  small.textContent = msg;
  emailElement.value = "";
}

function throwSuccess() {
  const formContol = emailElement.parentElement.parentElement;
  formContol.className = "form-control";
  small.style.display = "none";
  modalTextElement.textContent = emailElement.value;
  emailElement.value = "";
}

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

span.onclick = function () {
  modal.style.display = "none";
  location.reload();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
};

buttonClose.onclick = () => {
  modal.style.display = "none";
  location.reload();
};
