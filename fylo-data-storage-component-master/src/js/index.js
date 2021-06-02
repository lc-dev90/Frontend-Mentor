const range = document.getElementById("used-storage");

// bar
range.oninput = function (e) {
  console.log("aee");
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #ffa399 0%, #ff4d97 " +
    value +
    "%, #0c122c " +
    value +
    "%, #0c122c 100%)";
};
