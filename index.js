//Creates a list of the choices of: rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];

//PLayer, computer, and result displays are accessed using the getElementById method with utilization of the DOM(Document Object Model)

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

//Scores displays are accessed of each element by id from the Document Object Model
// Each component of the result, either a win, loss, or tie are initially set to 0
const winsCount = document.getElementById("winsCount");
let wins = 0;

const tiesCount = document.getElementById("tiesCount");
let ties = 0;

const lossesCount = document.getElementById("lossesCount");
let losses = 0;

/* The playGame function is called whenever, either the rock, paper, or scissors buttons are clicked.
It first makes a random number inclusive of [0,2]. Then uses it to index as one of the choices from the array, of either:
rock, paper, or scissors. Once the computer's choice is determined it compares it to what the player's choice was based off which button they clicked.
If they were the same choice, a tie is the result, if the player wins, then the result is a win, and vice-versa for a loss. 
Once the result is received it is translated into the displays. The player choice, computer choice, and result of what happened in the round
are displayed on the screen for the player. The wins, ties, and losses ongoing counters are also updated based off the result of the round. 
The result of the game also get a s nice color coordinated design based off whether there was a win, loss, or tie in the round. 
*/
function playGame(playerChoice) {
  const randomNumber = Math.floor(Math.random() * 3);
  // Randomly generates a computerChoice of either: rock, paper, or scissors
  const computerChoice = choices[randomNumber];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT WAS A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" ? "PLAYER WINS!" : "PLAYER LOSES!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "PLAYER WINS!" : "PLAYER LOSES!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "PLAYER WINS!" : "PLAYER LOSES!";
        break;
    }

  }


  // The resultDisplay design resets all the color coordination classes of css by removing them from the element for safety.  
  resultDisplay.classList.remove("greenText", "redText", "neutralText");


  switch (result) {
    case "PLAYER WINS!":
        wins++;
      resultDisplay.classList.add("greenText");
      break;
    case "PLAYER LOSES!":
        losses++;
      resultDisplay.classList.add("redText");
      break;
    case "IT WAS A TIE!":
      ties++;
      resultDisplay.classList.add("neutralText");
      break;
  }

  // textContents are all updates and cleanly put at the bottom!
  playerDisplay.textContent = "Player: " + playerChoice;
  computerDisplay.textContent = "Computer: " + computerChoice;
  resultDisplay.textContent = result;
  winsCount.textContent = "W: " + wins;
  tiesCount.textContent = "T: " + ties;
  lossesCount.textContent = "L: " + losses;
}
