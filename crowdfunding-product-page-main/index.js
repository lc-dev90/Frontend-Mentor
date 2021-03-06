const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const span = document.getElementsByClassName("close")[0];
const bookmark = document.getElementById("bookmark");
const backButton = document.getElementById("back-button");
const bambooButton = document.getElementById("bamboo-select");
const blackButton = document.getElementById("back-select");
const bambooInput = document.getElementById("bamboo-input");
const blackInput = document.getElementById("black-input");
const noRewardInput = document.getElementById("no-reward-input");
const noRewardSubmit = document.getElementById("no-reward-submit");
const bambooSubmit = document.getElementById("bamboo-submit");
const blackSubmit = document.getElementById("black-submit");
const modalContent = document.getElementById("modal-content");
const cards = modalContent.querySelectorAll(".card");
const completedBar = document.getElementById("completed-bar");
const bambooInputElement = document.getElementById("bamboo");
const blackInputElement = document.getElementById("black");
const backedElement = document.getElementById("backed");
const totalBackersElement = document.getElementById("total");
const form = document.getElementById("form");
const gotit = document.getElementById("gotit");
const hamburguer = document.getElementById("hamburguer");
const modalMobile = document.getElementById("modal-mobile");
const closeHamburguer = document.getElementById("close-hamburguer");

hamburguer.onclick = function () {
  modalMobile.style.display = "block";
  hamburguer.style.display = "none";
  closeHamburguer.style.display = "block";
};

window.addEventListener("click", (e) => {
  if (e.target == modalMobile) {
    modalMobile.style.display = "none";
    closeHamburguer.style.display = "none";
    hamburguer.style.display = "block";
  }
});

closeHamburguer.onclick = function () {
  modalMobile.style.display = "none";
  closeHamburguer.style.display = "none";
  hamburguer.style.display = "block";
};

let quantityBamboo = 101;
let quantityBlack = 64;
let backed = 89914;
let backers = 5007;

/* Bar Percentage */

let total = 100000;
let percentage = (backed * 100) / total;
if (percentage > 100) {
  percentage = 100;
}

function move() {
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= percentage) {
      clearInterval(id);
    } else {
      width++;
      completedBar.style.width = `${width}%`;
    }
  }
}

reloadBackers();

noRewardSubmit.onclick = function (e) {
  document.body.classList.add("modal-open");
  e.preventDefault();
  backers += 1;
  reloadBackers();
  modal2.style.display = "block";
  gotit.onclick = function () {
    modal2.style.display = "none";
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };
  window.onclick = function (event) {
    if (event.target == modal2) {
      disableErrorMesage(blackInputElement);
      disableErrorMesage(bambooInputElement);
      removeClass();
      modal2.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };
};

bambooSubmit.onclick = function (e) {
  e.preventDefault();
  if (bambooInputElement.value === "") {
    throwError(bambooInputElement, "Please, enter a value!");
  } else if (bambooInputElement.value < 25) {
    throwError(bambooInputElement, "Please, only 25 more!");
  } else {
    disableErrorMesage(bambooInputElement);
    backed += parseInt(bambooInputElement.value);
    quantityBamboo -= 1;
    backers += 1;
    bambooInputElement.value = "";
    reloadBackers();
    modal2.style.display = "block";
    gotit.onclick = function () {
      modal2.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    };
    window.onclick = function (event) {
      if (event.target == modal2) {
        disableErrorMesage(blackInputElement);
        disableErrorMesage(bambooInputElement);
        removeClass();
        modal2.style.display = "none";
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    };
  }
};

blackSubmit.onclick = function (e) {
  e.preventDefault();
  if (blackInputElement.value === "") {
    throwError(blackInputElement, "Please, enter a value!");
  } else if (blackInputElement.value < 75) {
    throwError(blackInputElement, "Please, only 75 more!");
  } else {
    disableErrorMesage(blackInputElement);
    backed += parseInt(blackInputElement.value);
    console.log(parseInt(blackInputElement.value));
    quantityBlack -= 1;
    backers += 1;
    reloadBackers();
    blackInputElement.value = "";
    modal2.style.display = "block";
    console.log(backed, quantityBlack);
    gotit.onclick = function () {
      modal2.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    };
    window.onclick = function (event) {
      if (event.target == modal2) {
        disableErrorMesage(blackInputElement);
        disableErrorMesage(bambooInputElement);
        removeClass();
        modal2.style.display = "none";
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    };
  }
};
function throwError(input, msg) {
  const small = input.parentElement.parentElement.querySelector("small");
  small.style.display = "flex";
  small.textContent = msg;
}

function disableErrorMesage(input) {
  const small = input.parentElement.parentElement.querySelector("small");
  small.style.display = "none";
}

noRewardInput.addEventListener("click", () => {
  removeClass();
  cards[0].classList.add("selected");
  cards[0].querySelector(".enter-pledge").style.display = "flex";
  if (cards[1].querySelector(".enter-pledge").querySelector("small")) {
    cards[1]
      .querySelector(".enter-pledge")
      .querySelector("small").style.display = "none";
  }
  if (cards[2].querySelector(".enter-pledge").querySelector("small")) {
    cards[2]
      .querySelector(".enter-pledge")
      .querySelector("small").style.display = "none";
  }
  bambooInputElement.value = "";
  blackInputElement.value = "";
});
bambooInput.addEventListener("click", () => {
  removeClass();
  cards[1].classList.add("selected");
  cards[1].querySelector(".enter-pledge").style.display = "flex";
  if (cards[2].querySelector(".enter-pledge").querySelector("small")) {
    cards[2]
      .querySelector(".enter-pledge")
      .querySelector("small").style.display = "none";
  }
  bambooInputElement.value = "";
  blackInputElement.value = "";
});
blackInput.addEventListener("click", () => {
  removeClass();
  cards[2].classList.add("selected");
  cards[2].querySelector(".enter-pledge").style.display = "flex";
  if (cards[1].querySelector(".enter-pledge").querySelector("small")) {
    cards[1]
      .querySelector(".enter-pledge")
      .querySelector("small").style.display = "none";
  }
  bambooInputElement.value = "";
  blackInputElement.value = "";
});

span.onclick = function () {
  removeClass();
  disableErrorMesage(blackInputElement);
  disableErrorMesage(bambooInputElement);
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    disableErrorMesage(blackInputElement);
    disableErrorMesage(bambooInputElement);
    removeClass();
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmarked");
});

backButton.onclick = function () {
  document.body.classList.add("modal-open");
  modal.style.display = "block";
  document.querySelectorAll("input[type=radio]").forEach((input) => {
    input.checked = false;
  });
  cards.forEach((card) => {
    card.classList.remove("selected");
    if (card.querySelector(".enter-pledge")) {
      card.querySelector(".enter-pledge").style.display = "none";
    }
  });
};

bambooButton.addEventListener("click", function () {
  document.body.classList.add("modal-open");
  modal.style.display = "block";
  bambooInput.checked = true;
  cards[1].classList.add("selected");
  cards[1].querySelector(".enter-pledge").style.display = "flex";
});

blackButton.addEventListener("click", function () {
  document.body.classList.add("modal-open");
  modal.style.display = "block";
  blackInput.checked = true;
  cards[2].classList.add("selected");
  cards[2].querySelector(".enter-pledge").style.display = "flex";
});

function removeClass() {
  cards.forEach((card) => {
    if (card.querySelector(".enter-pledge")) {
      card.querySelector(".enter-pledge").style.display = "none";
    }
    if ((card.classList.contains = "selected")) {
      card.classList.remove("selected");
    }
  });
}

function reloadBackers() {
  document.getElementById("quantity-bamboo").textContent =
    quantityBamboo.toString();
  document.getElementById("quantity-bamboo-main").textContent =
    quantityBamboo.toString();
  document.getElementById("quantity-black").textContent =
    quantityBlack.toString();
  document.getElementById("quantity-black-main").textContent =
    quantityBlack.toString();
  totalBackersElement.textContent = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(backers);
  backedElement.textContent =
    "$" +
    new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format(backed);
}
