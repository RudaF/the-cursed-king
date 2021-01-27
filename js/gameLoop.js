const titles = [
  "Wise",
  "Fool",
  "Mad",
  "Saint",
  "Righteous",
  "Greedy",
  "Ill",
  "Scholar",
  "Wealthy",
];

const intro =
  "You are a king, hungry for power, and just found a book called Ars Goetia, which details how to make a ritual to establish a pact with a demon, Belial, and he will give you anything you want. Your biggest desire is to be king forever, and it will be given to you. This, however, will not dismiss you of your responsibilities as a King. Are you ready to maintain the balance in your kingdom?";

const demon = [
  "You have completed the ritual. In front of you, you see a grim light, a carriege covered in flames approaches and two beautiful angels are riding it. As they get close, a single voice comes out of their mouths:\n -Tell me, who summoned thee?",
  "-And what doth thee desire?",
  "-Then it shall be done!",
  "You wake up in the dungeon and see that only shadows surround you. The demon has left and said that your desired would be done, but yet you feel no different. You should return to the main castle to take care of your every-day endeavours.",
];

const priest = [];

const peasant = [];

const general = [];

const lord = [];

const end = [];

let nameVariable = "";
let ageVariable = "Year I of Summer";

const textContainer = document.getElementById("main-text");
textContainer.innerText = intro;

const singleButton = document.getElementById("single-choice-button");

const playerId = document.getElementById("player-id");
const nameHolder = document.getElementById("name-holder");
const ageHolder = document.getElementById("age-holder");

const playerNameHolder = document.getElementById("input-text-holder");

let clickCounter = 0;

let kingdom = new Kingdom();
let player = new Player("");

function startGame() {
  singleButton.innerText = "I am King...";
  textContainer.innerText = demon[0];
  playerNameHolder.innerHTML =
    '<input  type="input" id="name"  class="form__field" placeholder="Write thy name!" name="Write thy name!" required/>';
  singleButton.onclick = printPlayerName;
  //   singleButton.onclick = gameLoop;

  // get player name
  // print player name in footer
  //has the game started already ? continueGame() : new PLayer(name), new Kingdom(random name), get && print initial text
  // Buttons remain one until finish initial text
  // Change to two buttons
  // start game loop
}

function printPlayerName() {
  const playerName = document.getElementById("name");
  nameVariable = playerName.value;
  nameHolder.innerText =
    "King " +
    nameVariable +
    ", the " +
    titles[Math.floor(Math.random() * titles.length)];
  ageHolder.innerText = ageVariable;
  playerNameHolder.parentElement.removeChild(playerNameHolder);
}

function gameLoop() {
  //   textContainer.innerText = demon[3];
  //   singleButton.innerText = "Return to the main castle.";
}

function gameOver() {}

function continueGame() {}

singleButton.addEventListener("click", () => {
  clickCounter++;
  console.log(clickCounter);
  if (clickCounter == 1) {
    startGame();
  } else if (clickCounter == 2) {
    printPlayerName();
    textContainer.innerText = demon[1];
    singleButton.innerText = "I want to forever be King.";
  } else if (clickCounter == 3) {
    textContainer.innerText = demon[2];
    singleButton.innerText = "...";
  } else {
    gameLoop();
  }
});
