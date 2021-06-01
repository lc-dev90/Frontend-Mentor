const pageviews = document.getElementById("pageviews");
const desktopPrice = document.getElementById("desktop-price");
const mobilePrice = document.getElementById("mobile-price");
const toggle = document.getElementById("toggle");
const inputbar = document.getElementById("myInput");

toggle.oninput = function (e) {
  if (e.target.checked) {
    if (inputbar.value == 1) {
      desktopPrice.textContent = "$6.00";
      mobilePrice.textContent = "$6.00";
    } else if (inputbar.value > 1 && inputbar.value < 32) {
      desktopPrice.textContent = "$9.00";
      mobilePrice.textContent = "$9.00";
    } else if (inputbar.value >= 32 && inputbar.value < 65) {
      desktopPrice.textContent = "$12.00";
      mobilePrice.textContent = "$12.00";
    } else if (inputbar.value >= 66 && inputbar.value < 99) {
      desktopPrice.textContent = "$18.00";
      mobilePrice.textContent = "$18.00";
    } else if (inputbar.value == 100) {
      desktopPrice.textContent = "$27.00";
      mobilePrice.textContent = "$27.00";
    }
  } else {
    if (inputbar.value == 1) {
      desktopPrice.textContent = "$8.00";
      mobilePrice.textContent = "$8.00";
    } else if (inputbar.value > 1 && inputbar.value < 32) {
      desktopPrice.textContent = "$12.00";
      mobilePrice.textContent = "$12.00";
    } else if (inputbar.value >= 32 && inputbar.value < 65) {
      desktopPrice.textContent = "$16.00";
      mobilePrice.textContent = "$16.00";
    } else if (inputbar.value >= 66 && inputbar.value < 99) {
      desktopPrice.textContent = "$24.00";
      mobilePrice.textContent = "$24.00";
    } else if (inputbar.value == 100) {
      desktopPrice.textContent = "$36.00";
      mobilePrice.textContent = "$36.00";
    }
  }
};

inputbar.oninput = function (e) {
  if (e.target.value == 1) {
    pageviews.textContent = "10k pageviews";
    if (toggle.checked == true) {
      desktopPrice.textContent = "$6.00";
      mobilePrice.textContent = "$6.00";
    } else {
      desktopPrice.textContent = "$8.00";
      mobilePrice.textContent = "$8.00";
    }
  } else if (e.target.value > 1 && e.target.value < 32) {
    pageviews.textContent = "50k pageviews";
    if (toggle.checked == true) {
      desktopPrice.textContent = "$9.00";
      mobilePrice.textContent = "$9.00";
    } else {
      desktopPrice.textContent = "$12.00";
      mobilePrice.textContent = "$12.00";
    }
  } else if (e.target.value >= 32 && e.target.value < 65) {
    pageviews.textContent = "100k pageviews";
    if (toggle.checked == true) {
      desktopPrice.textContent = "$12.00";
      mobilePrice.textContent = "$12.00";
    } else {
      desktopPrice.textContent = "$16.00";
      mobilePrice.textContent = "$16.00";
    }
  } else if (e.target.value >= 66 && e.target.value <= 99) {
    pageviews.textContent = "500k pageviews";
    if (toggle.checked == true) {
      desktopPrice.textContent = "$18.00";
      mobilePrice.textContent = "$18.00";
    } else {
      desktopPrice.textContent = "$24.00";
      mobilePrice.textContent = "$24.00";
    }
  } else if (e.target.value == 100) {
    pageviews.textContent = "1m pageviews";
    if (toggle.checked == true) {
      desktopPrice.textContent = "$27.00";
      mobilePrice.textContent = "$27.00";
    } else {
      desktopPrice.textContent = "$36.00";
      mobilePrice.textContent = "$36.00";
    }
  }
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #10d5c2 0%, #10d5c2 " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100.5%)";
};
