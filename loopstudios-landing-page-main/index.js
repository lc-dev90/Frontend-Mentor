const imgGuyElement = document.querySelector("article div img");
const cards = document.querySelectorAll(".card");

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
};

box.addEventListener("click", function (e) {
  const navmobile = document.querySelector(".nav-mobile");
  navmobile.classList.toggle("open");
  var opacity = 0;
  function MyFadeFunction() {
    if (opacity < 1) {
      opacity += 0.1;
      setTimeout(function () {
        MyFadeFunction();
      }, 50);
    }
    document.querySelector("nav .logo").style.opacity = opacity;
  }
  MyFadeFunction();
});
