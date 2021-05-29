const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const bookmark = document.getElementById("bookmark");

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmarked");
});
