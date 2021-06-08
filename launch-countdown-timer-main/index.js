const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countDownDate = new Date("Jun 30, 2021 00:00:01").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000); /* 
  mili.textContent = Math.floor(distance % 1000); */
}, 1);
