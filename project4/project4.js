const rockNav = document.getElementById("rock-nav");
const fishNav = document.getElementById("fish-nav");
const fountainNav = document.getElementById("fountain-nav");
const hammerNav = document.getElementById("hammer-nav");
const handNav = document.getElementById("hand-nav");
const churchNav = document.getElementById("church-nav");
const backpackNav = document.getElementById("backpack-nav");
const treeNav = document.getElementById("tree-nav");
const houseNav = document.getElementById("house-nav");
const dioramaNav = document.getElementById("diorama-nav");
const fireNav = document.getElementById("fire-nav");
const dioramafinalNav = document.getElementById("dioramafinal-nav");

const backNav = document.getElementById("back-nav");

const rockPage = document.getElementById("rockpage-page");
const fishPage = document.getElementById("fishpage-page");
const fountainPage = document.getElementById("fountainpage-page");
const hammerPage = document.getElementById("hammerpage-page");
const handPage = document.getElementById("handpage-page");
const churchPage = document.getElementById("churchpage-page");
const backpackPage = document.getElementById("backpackpage-page");
const treePage = document.getElementById("treepage-page");
const housePage = document.getElementById("housepage-page");
const dioramaPage = document.getElementById("dioramapage-page");
const firePage = document.getElementById("firepage-page");

const dioramafinalPage = document.getElementById("dioramafinalpage-page");

rockNav.addEventListener("click", showRock);
fishNav.addEventListener("click", showFish);
fountainNav.addEventListener("click", showFountain);
hammerNav.addEventListener("click", showHammer);
handNav.addEventListener("click", showHand);
churchNav.addEventListener("click", showChurch);
backpackNav.addEventListener("click", showBackpack);
treeNav.addEventListener("click", showTree);
houseNav.addEventListener("click", showHouse);
dioramaNav.addEventListener("click", showDiorama);
fireNav.addEventListener("click", showFire);
dioramafinalNav.addEventListener("click", showDioramafinal);

backNav.addEventListener("click", showProject4insub);

//

function showProject4insub() {
  displayNone();
  window.scrollTo(0, 0);
  project4Page.style.display = "block"; 
}

function showRock() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  rockPage.style.display = "block";
}

function showFish() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  fishPage.style.display = "block";
}

function showFountain() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  fountainPage.style.display = "block";
}

function showHammer() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  hammerPage.style.display = "block";
}

function showHand() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  handPage.style.display = "block";
}

function showChurch() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  churchPage.style.display = "block";
}

function showBackpack() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  backpackPage.style.display = "block";
}

function showTree() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  treePage.style.display = "block";
}

function showHouse() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  housePage.style.display = "block";
}

function showDiorama() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  dioramaPage.style.display = "block";
}

function showFire() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  firePage.style.display = "block";
}

function showDioramafinal() {
  window.scrollTo(0, 0);
  project4Page.style.display = "none";
  dioramafinalPage.style.display = "block";
}