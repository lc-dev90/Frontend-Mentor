const range = document.getElementById("used-storage");
const usedElement = document.getElementById("used");
const leftElement = document.getElementById("left");

range.oninput = function (e) {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #ffa399 0%, #ff4d97 " +
    value +
    "%, #0c122c " +
    value +
    "%, #0c122c 100%)";
};

const total = 1000;

range.addEventListener("input", (e) => {
  used.textContent = Math.floor(e.target.value);
  leftElement.textContent = Math.floor(total - e.target.value);
});
