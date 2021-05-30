const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const bookmark = document.getElementById("bookmark");
const backButton = document.getElementById("back-button");
const bambooButton = document.getElementById("bamboo-select");
const blackButton = document.getElementById("back-select");
const bambooInput = document.getElementById("bamboo-input");
const blackInput = document.getElementById("black-input");
const noRewardInput = document.getElementById("no-reward-input");
const modalContent = document.getElementById("modal-content");
const cards = modalContent.querySelectorAll(".card");

noRewardInput.addEventListener("click", () => {
  removeClass();
  cards[0].classList.add("selected");
  cards[0].querySelector(".enter-pledge").style.display = "block";
});
bambooInput.addEventListener("click", () => {
  removeClass();
  cards[1].classList.add("selected");
  cards[1].querySelector(".enter-pledge").style.display = "block";
});
blackInput.addEventListener("click", () => {
  removeClass();
  cards[2].classList.add("selected");
  cards[2].querySelector(".enter-pledge").style.display = "block";
});

span.onclick = function () {
  removeClass();
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    removeClass();
    modal.style.display = "none";
  }
};

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmarked");
});

backButton.onclick = function () {
  modal.style.display = "block";
};

bambooButton.addEventListener("click", function () {
  modal.style.display = "block";
  bambooInput.checked = true;
  cards[1].classList.add("selected");
  cards[1].querySelector(".enter-pledge").style.display = "block";
});

blackButton.addEventListener("click", function () {
  modal.style.display = "block";
  blackInput.checked = true;
  cards[2].classList.add("selected");
  cards[2].querySelector(".enter-pledge").style.display = "block";
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
