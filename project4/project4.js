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

//

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
backNav.addEventListener("click", showProject4);

//

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
}

function showRock() {
  project4Page.style.display = "none";
  rockPage.style.display = "block";
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
}

function showFish() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "block";
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
}

function showFountain() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "block";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showHammer() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "block";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showHand() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "block";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showChurch() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "block";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showBackpack() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "block";
  treePage.style.display = "none";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showTree() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "block";
  housePage.style.display = "none";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showHouse() {
  project4Page.style.display = "none";
  rockPage.style.display = "none";
  fishPage.style.display = "none";
  fountainPage.style.display = "none";
  hammerPage.style.display = "none";
  handPage.style.display = "none";
  churchPage.style.display = "none";
  backpackPage.style.display = "none";
  treePage.style.display = "none";
  housePage.style.display = "block";
  dioramaPage.style.display = "none";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showDiorama() {
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
  dioramaPage.style.display = "block";
  firePage.style.display = "none";
  dioramafinalPage.style.display = "none";
}

function showFire() {
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
  firePage.style.display = "block";
  dioramafinalPage.style.display = "none";
}

function showDioramafinal() {
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
  dioramafinalPage.style.display = "block";
}