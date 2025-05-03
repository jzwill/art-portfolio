const homeNav = document.getElementById("home-nav");
const project1Nav = document.getElementById("project1-nav");
const project2Nav = document.getElementById("project2-nav");
const project3Nav = document.getElementById("project3-nav");
const project4Nav = document.getElementById("project4-nav");

const homePage = document.getElementById("home-page");
const project1Page = document.getElementById("project1-page");
const project2Page = document.getElementById("project2-page");
const project3Page = document.getElementById("project3-page");
const project4Page = document.getElementById("project4-page");

//

homeNav.addEventListener("click", showHome);
project1Nav.addEventListener("click", showProject1);
project2Nav.addEventListener("click", showProject2);
project3Nav.addEventListener("click", showProject3);
project4Nav.addEventListener("click", showProject4);

//

function showHome() {
  homePage.style.display = "block";
  project1Page.style.display = "none";
  project2Page.style.display = "none";
  project3Page.style.display = "none";
  project4Page.style.display = "none"; 
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
  homeNav.classList.toggle("taskbar-button-active");
  project1Nav.classList.remove("taskbar-button-active");
  project2Nav.classList.remove("taskbar-button-active");
  project3Nav.classList.remove("taskbar-button-active");
  project4Nav.classList.remove("taskbar-button-active");

  audioFile.pause();
  playImage.src = "project2/images/buttonplay.webp";
  playButton.removeEventListener("click", pauseAudio);
  playButton.addEventListener("click", playAudio);
  clearInterval(intervalID);
  clearInterval(intervalID2);
}

function showProject1() {
  homePage.style.display = "none";
  project1Page.style.display = "block";
  project2Page.style.display = "none";
  project3Page.style.display = "none";
  project4Page.style.display = "none"; 
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
  homeNav.classList.remove("taskbar-button-active");
  homeNav.classList.add("taskbar-button");
  project1Nav.classList.toggle("taskbar-button-active");
  project2Nav.classList.remove("taskbar-button-active");
  project3Nav.classList.remove("taskbar-button-active");
  project4Nav.classList.remove("taskbar-button-active");

  let answer1 = document.getElementById("answer-1");
  let icon1 = document.getElementById("icon-1");
  answer1.classList.remove("open-answer");
  qbutton1.classList.remove("hovered-over");
  icon1.classList.remove("inactive-icon");

  let answer2 = document.getElementById("answer-2");
  let icon2 = document.getElementById("icon-2");
  answer2.classList.remove("open-answer");
  qbutton2.classList.remove("hovered-over");
  icon2.classList.remove("inactive-icon");

  let answer3 = document.getElementById("answer-3");
  let icon3 = document.getElementById("icon-3");
  answer3.classList.remove("open-answer");
  qbutton3.classList.remove("hovered-over");
  icon3.classList.remove("inactive-icon");

  let answer4 = document.getElementById("answer-4");
  let icon4 = document.getElementById("icon-4");
  answer4.classList.remove("open-answer");
  qbutton4.classList.remove("hovered-over");
  icon4.classList.remove("inactive-icon");

  audioFile.pause();
  playImage.src = "project2/images/buttonplay.webp";
  playButton.removeEventListener("click", pauseAudio);
  playButton.addEventListener("click", playAudio);
  clearInterval(intervalID);
  clearInterval(intervalID2);
}

function showProject2() {
  homePage.style.display = "none";
  project1Page.style.display = "none";
  project2Page.style.display = "block";
  project3Page.style.display = "none";
  project4Page.style.display = "none"; 
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
  homeNav.classList.remove("taskbar-button-active");
  homeNav.classList.add("taskbar-button");
  project1Nav.classList.remove("taskbar-button-active");
  project2Nav.classList.toggle("taskbar-button-active");
  project3Nav.classList.remove("taskbar-button-active");
  project4Nav.classList.remove("taskbar-button-active");

}

function showProject3() {
  homePage.style.display = "none";
  project1Page.style.display = "none";
  project2Page.style.display = "none";
  project3Page.style.display = "block";
  project4Page.style.display = "none"; 
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
  homeNav.classList.remove("taskbar-button-active");
  homeNav.classList.add("taskbar-button");
  project1Nav.classList.remove("taskbar-button-active");
  project2Nav.classList.remove("taskbar-button-active");
  project3Nav.classList.toggle("taskbar-button-active");
  project4Nav.classList.remove("taskbar-button-active");

  audioFile.pause();
  playImage.src = "project2/images/buttonplay.webp";
  playButton.removeEventListener("click", pauseAudio);
  playButton.addEventListener("click", playAudio);
  clearInterval(intervalID);
  clearInterval(intervalID2);
}

function showProject4() {
  homePage.style.display = "none";
  project1Page.style.display = "none";
  project2Page.style.display = "none";
  project3Page.style.display = "none";
  project4Page.style.display = "block"; 
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
  homeNav.classList.remove("taskbar-button-active");
  homeNav.classList.add("taskbar-button");
  project1Nav.classList.remove("taskbar-button-active");
  project2Nav.classList.remove("taskbar-button-active");
  project3Nav.classList.remove("taskbar-button-active");
  project4Nav.classList.toggle("taskbar-button-active");

  audioFile.pause();
  playImage.src = "project2/images/buttonplay.webp";
  playButton.removeEventListener("click", pauseAudio);
  playButton.addEventListener("click", playAudio);
  clearInterval(intervalID);
  clearInterval(intervalID2);
}

var slideIndex = 1;
showDivsArt(slideIndex);

function plusDivsArt(n) {
  showDivsArt((slideIndex += n));
}

function showDivsArt(n) {
  var i;
  var x = document.getElementsByClassName("artSlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var slideIndex = 1;
showDivsPhotos(slideIndex);

function plusDivsPhotos(n) {
  showDivsPhotos((slideIndex += n));
}

function showDivsPhotos(n) {
  var i;
  var x = document.getElementsByClassName("photoSlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
