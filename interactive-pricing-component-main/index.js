/* const pageviews = document.getElementById("pageviews");
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
}; */

/* Query Selector */

const pageviews = document.querySelector("#pageviews span"),
  price = document.querySelector(".price span"),
  toggle = document.querySelector(".toggle-container input"),
  inputbar = document.getElementById("myInput");

// generate price on switch
toggle.onclick = function () {
  if (toggle.checked == true) {
    let priceInt = parseInt(price.textContent);
    price.textContent = `${priceInt - priceInt * 0.25}`;
  } else {
    refreshPrices();
  }
};

// generate price on range
inputbar.addEventListener("input", refreshPrices);

function refreshPrices() {
  if (inputbar.value == 1) {
    if (toggle.checked == true) {
      price.textContent = `${8 - 8 * 0.25}`;
    } else {
      price.textContent = 8;
    }
    pageviews.textContent = "10k";
  }

  if (inputbar.value == 2) {
    if (toggle.checked == true) {
      price.textContent = 9;
    } else {
      price.textContent = 12;
    }

    pageviews.textContent = "50k";
  }

  if (inputbar.value == 3) {
    if (toggle.checked == true) {
      price.textContent = 12;
    } else {
      price.textContent = 16;
    }

    pageviews.textContent = "100k";
  }

  if (inputbar.value == 4) {
    if (toggle.checked == true) {
      price.textContent = 18;
    } else {
      price.textContent = 24;
    }

    pageviews.textContent = "500k";
  }

  if (inputbar.value == 5) {
    if (toggle.checked == true) {
      price.textContent = 27;
    } else {
      price.textContent = 36;
    }

    pageviews.textContent = "1M";
  }
}

// bar
inputbar.oninput = function (e) {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #10d5c2 0%, #10d5c2 " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100.5%)";
};
