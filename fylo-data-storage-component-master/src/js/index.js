const range = document.getElementById("used-storage");
range.oninput = function (e) {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #ffa399 0%, #ff4d97 " +
    value +
    "%, #0c122c " +
    value +
    "%, #0c122c 100%)";
};
// bar
