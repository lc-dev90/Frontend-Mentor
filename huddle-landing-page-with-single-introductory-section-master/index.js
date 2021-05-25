const modal = document.getElementById("myModal");
const btn = document.getElementById("register");
const span = document.getElementsByClassName("close")[0];
const formElement = document.getElementById("form");
const emailElement = document.getElementById("email");
const nameElement = document.getElementById("name");
const lastNameElement = document.getElementById("lastName");
const passwordElement = document.getElementById("password");
const password2Element = document.getElementById("password2");
const formContainer = document.getElementById("form-container");

btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  setTimeout(function () {
    location.reload();
  }, 200);
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    setTimeout(function () {
      location.reload();
    }, 200);
  }
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailElement.value;
  const name = nameElement.value;
  const lastName = lastNameElement.value;
  const password = passwordElement.value;
  const password2 = password2Element.value;
  if (name === "") {
    throwError(nameElement, "Please, enter your name.");
  } else {
    throwSuccess(nameElement);
  }
  if (lastName === "") {
    throwError(lastNameElement, "Please, enter your last name.");
  } else {
    throwSuccess(lastNameElement);
  }
  if (email === "") {
    throwError(emailElement, "Please, enter your e-mail.");
  } else if (!validateEmail(email)) {
    throwError(emailElement, "Please, enter a valid email.");
  } else {
    throwSuccess(emailElement);
  }
  if (password === "") {
    throwError(passwordElement, "Please, enter your password.");
  } else {
    throwSuccess(passwordElement);
  }

  if (password2 === "") {
    throwError(password2Element, "Please, repeat your password");
  } else if (password2 !== password) {
    throwError(password2Element, "Your password must be the same.");
  } else {
    throwSuccess(password2Element);
  }

  if (name && lastName && validateEmail(email) && password === password2) {
    const loader = "<div class='loader' id='loader'></div>";
    const title = "Verify your email!";
    const text = `We have sent an e-mail to <span>${email}</span>. You need to verify your e-mail to continue.`;
    formContainer.innerHTML = `<div>${loader}</div><div id='message' class='hidden'><h2>${title}</h2><p>${text}</p><button>Verify</button></div>`;
    setTimeout(function () {
      const loader = document.getElementById("loader");
      loader.classList.add("hidden");
    }, 1500);
    setTimeout(function () {
      const message = document.getElementById("message");
      message.classList.remove("hidden");
    }, 1500);

    formContainer.querySelector("button").onclick = function () {
      modal.style.display = "block";
      setTimeout(function () {
        location.reload();
      }, 200);
    };
  }
});

function throwError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = msg;
}

function throwSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
