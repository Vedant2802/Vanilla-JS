// Variables for Buttons

const startStopbtn = document.querySelector("#startStopbtn");
console.log(startStopbtn);
const resetButton = document.querySelector("#resetbtn");
console.log(resetButton);

// Variables for Timer

let seconds = 0;
let minutes = 0;
let hours = 0;

// StopWatch Function

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  //   document.querySelector(".timer").innerText =
  //     hours + ":" + minutes + ":" + seconds;
  let h = hours;
  let m = minutes;
  let s = seconds;
  if (hours < 10) {
    h = "0" + h;
  }
  if (minutes < 10) {
    m = "0" + m;
  }
  if (seconds < 10) {
    s = "0" + s;
  }
  document.querySelector(".timer").innerText = h + ":" + m + ":" + s;
}
// startStopbtn.addEventListener("click", function () {});
// window.setInterval(stopWatch, 1000);

// variables for set interval and timer status
let timerInterval = null;
let timerStatus = "stop";

startStopbtn.addEventListener("click", function () {
  if (timerStatus == "stop") {
    console.log(timerStatus);
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopbtn"
    ).innerText = `<i class="fa-solid fa-pause id="pause"</i>`;
    timerStatus = "started";
  } else {
    clearInterval(timerInterval);
    document.getElementById(
      "startStopbtn"
    ).innerText = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stop";
  }
});

resetButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".timer").innerText = "00:00:00";
});
