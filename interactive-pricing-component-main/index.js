/* Query Selector */

const pageviews = document.querySelector("#pageviews span"),
  price = document.querySelectorAll(".price span"),
  toggle = document.querySelector(".toggle-container input"),
  inputbar = document.getElementById("myInput");

// generate price on switch
toggle.onclick = function (e) {
  if (e.target.checked) {
    let priceInt = parseInt(price[0].textContent);
    price[0].textContent = `${priceInt - priceInt * 0.25}`;
    price[1].textContent = `${priceInt - priceInt * 0.25}`;
  } else {
    refreshPrices();
  }
};

// generate price on range
inputbar.addEventListener("input", refreshPrices);

function refreshPrices() {
  if (inputbar.value == 1) {
    if (toggle.checked == true) {
      price[0].textContent = `${8 - 8 * 0.25}`;
      price[1].textContent = `${8 - 8 * 0.25}`;
    } else {
      price[0].textContent = 8;
      price[1].textContent = 8;
    }
    pageviews.textContent = "10k";
  }

  if (inputbar.value == 2) {
    if (toggle.checked == true) {
      price[0].textContent = 9;
      price[1].textContent = 9;
    } else {
      price[0].textContent = 12;
      price[1].textContent = 12;
    }

    pageviews.textContent = "50k";
  }

  if (inputbar.value == 3) {
    if (toggle.checked == true) {
      price[0].textContent = 12;
      price[1].textContent = 12;
    } else {
      price[0].textContent = 16;
      price[1].textContent = 16;
    }
    pageviews.textContent = "100k";
  }

  if (inputbar.value == 4) {
    if (toggle.checked == true) {
      price[0].textContent = 18;
      price[1].textContent = 18;
    } else {
      price[0].textContent = 24;
      price[1].textContent = 24;
    }
    pageviews.textContent = "500k";
  }

  if (inputbar.value == 5) {
    if (toggle.checked == true) {
      price[0].textContent = 27;
      price[1].textContent = 27;
    } else {
      price[0].textContent = 36;
      price[1].textContent = 36;
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
