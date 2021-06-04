const imgGuyElement = document.querySelector("article div img");
const cards = document.querySelectorAll(".card");
const box = document.querySelector(".box");
const btn = box.querySelector(".btn");
const navmobile = document.querySelector(".nav-mobile");

window.addEventListener("resize", () => {
  imgGuyElement.setAttribute(
    "src",
    `./images/${
      window.innerWidth < 980 ? "mobile" : "desktop"
    }/image-interactive.jpg`
  );
  if (window.innerWidth > 768) {
    document.querySelector("header").classList.remove("height");
    document.body.classList.remove("height");
    navmobile.classList.remove("open");
    btn.classList.remove("active");
  }
});

box.onclick = function () {
  if (btn.classList.contains("active")) {
    btn.className = "not-active";
  } else {
    btn.className = "active";
  }
};
box.addEventListener("click", function (e) {
  navmobile.classList.toggle("open");
  var opacity = 0;
  function MyFadeFunction() {
    if (opacity < 1) {
      opacity += 0.1;
      setTimeout(function () {
        MyFadeFunction();
      }, 20);
    }
    document.querySelector(".nav-mobile").style.opacity = opacity;
    document.querySelector("nav .logo").style.opacity = opacity;
  }
  MyFadeFunction();
  document.querySelector("header").classList.toggle("height");
  document.body.classList.toggle("height");
});

var i = 0;
var txt = "Immersive experiences that deliver";
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.addEventListener("load", typeWriter());
