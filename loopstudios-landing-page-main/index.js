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
