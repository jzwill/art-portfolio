const rockNav = document.getElementById("rock-nav");
const fishNav = document.getElementById("fish-nav");

const rockPage = document.getElementById("rockpage-page");
const fishPage = document.getElementById("fishpage-page");

//

rockNav.addEventListener("click", showRock);
fishNav.addEventListener("click", showFish);

//

function showRock() {
  project4Page.style.display = "none";
  rockPage.style.display = "block";
  fishPage.style.display = "none";
}

function showFish() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "block";
}