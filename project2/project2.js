let audioFile = document.getElementById("audio-file");

let playButton = document.getElementById("play-button");
let playImage = document.getElementById("play-image");

playButton.addEventListener("click", playAudio);
playButton.addEventListener("mouseover", openAnswer1);
playButton.addEventListener("mouseout", closeAnswer1);

let leftButton = document.getElementById("left-button");
let leftImage = document.getElementById("left-image");

leftButton.addEventListener("mouseover", openAnswer2);
leftButton.addEventListener("mouseout", closeAnswer2);

let rightButton = document.getElementById("right-button");
let rightImage = document.getElementById("right-image");

rightButton.addEventListener("mouseover", openAnswer3);
rightButton.addEventListener("mouseout", closeAnswer3);

function openAnswer1() {
  playImage.src = "project2/images/buttonplay-hovered.webp";
}
function closeAnswer1() {
  playImage.src = "project2/images/buttonplay.webp";
}
function openAnswer2() {
  leftImage.src = "project2/images/buttonleft-hovered.webp";
}
function closeAnswer2() {
  leftImage.src = "project2/images/buttonleft.webp";
}
function openAnswer3() {
  rightImage.src = "project2/images/buttonright-hovered.webp";
}
function closeAnswer3() {
  rightImage.src = "project2/images/buttonright.webp";
}

var intervalID;

let currentTime = 0;
let timer = document.getElementById("timer");

setTimeout(updateProgress);

function playAudio() {
  audioFile.play();
  playImage.src = "project2/images/buttonplay-hovered.webp";
  playButton.removeEventListener("mouseover", openAnswer1);
  playButton.removeEventListener("mouseout", closeAnswer1);
  playButton.removeEventListener("click", playAudio);
  playButton.addEventListener("click", pauseAudio);
  intervalID = setInterval(updateTimer, 1000);
  intervalID2 = setInterval(updateProgress, 1000);
}

function pauseAudio() {
  audioFile.pause();
  playImage.src = "project2/images/buttonpause.webp";
  playButton.removeEventListener("click", pauseAudio);
  playButton.addEventListener("click", playAudio);
  clearInterval(intervalID);
  clearInterval(intervalID2);
}

function updateProgress() {
  let progressBar = document.getElementById("progress-bar");
  progressBar.value = (audioFile.currentTime / audioFile.duration) * 100;
}

function updateTimer() {
  currentTime++;
  let minutes = currentTime / 60;
  let seconds = currentTime % 60;
  if (seconds < 10) {
    let timerReadout = Math.floor(minutes) + ":0" + seconds;
    timer.innerText = timerReadout;
  } else {
    let timerReadout = Math.floor(minutes) + ":" + seconds;
    timer.innerText = timerReadout;
  }
}
