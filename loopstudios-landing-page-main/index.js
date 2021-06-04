const imgGuyElement = document.querySelector("article div img");

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  imgGuyElement.setAttribute(
    "src",
    `./images/${
      window.innerWidth < 980 ? "mobile" : "desktop"
    }/image-interactive.jpg`
  );
});

const box = document.querySelector(".box");
box.onclick = function () {
  const btn = box.querySelector(".btn");
  btn.classList.toggle("active");
  btn.classList.toggle("not-active");
}; /* 
box.addEventListener("click", function (e) {
  const btn = box.querySelector(".btn");
  btn.classList.toggle("active");
  btn.classList.toggle("not-active");
});
 */
