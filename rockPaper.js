const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const winsLossesDiv = document.querySelector(".WinsLosses");
const paragraph = winsLossesDiv.querySelectorAll("p");
const StartGame = document.querySelector(".thebutton");
const EndGame = document.querySelector(".EndButton");
const wins = paragraph[0];
const losses = paragraph[1];

const resultDiv = document.querySelector(".result");
paper.addEventListener("click", () => playGame("paper"));
rock.addEventListener("click", () => playGame("rock"));
scissor.addEventListener("click", () => playGame("scissor"));
StartGame.addEventListener("click", () => StartGameButton());
EndGame.addEventListener("click", () => EndGameButton());
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  return "Some unsaved changes will be discarded";
});

function getComputerChoice() {
  let ChoiceOfComputer = ["rock", "paper", "scissor"];
  let NumberOfComputer = Math.ceil(Math.random() * 3) - 1;
  return ChoiceOfComputer[NumberOfComputer];
}

function playRound(playerSelection, computerSelection) {
  // console.log(`you choose ${playerSelection} and the computer choose ${computerSelection}`)

  if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      resultDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
      return `You loose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock") {
      resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      resultDiv.textContent = `It 's a tie! you both choose ${computerSelection}`;
      return `It 's a tie! you both choose ${computerSelection}`;
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "paper") {
      resultDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
      return `You loose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
      resultDiv.textContent = `It 's a tie! you both choose${computerSelection}`;
      return `It 's a tie! you both choose${computerSelection}`;
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "rock") {
      resultDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
      return `You loose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
      resultDiv.textContent = `It 's a tie! you both choose ${computerSelection}`;
      return `It 's a tie! you both choose ${computerSelection}`;
    }
  }
}
let computerWins = 0;
let playerWins = 0;
let isStarted = false;

function playGame(playerValue) {
  // let playerValue = prompt('enter the rock, paper or scissor').toLowerCase();
  if (!isStarted) return;

  let computerValue = getComputerChoice();
  let result = playRound(playerValue, computerValue);
  console.log(result);
  if (result.includes("win")) {
    playerWins++;
    wins.textContent = `Wins: ${playerWins}`;
  } else if (result.includes("loose")) {
    computerWins++;
    losses.textContent = `Losses: ${computerWins}`;
  }
  if (playerWins === 5 || computerWins === 5) {
    if (playerWins === 5) {
      resultDiv.textContent =
        "You won the game You reached 5 wins before the machine";
    } else resultDiv.textContent = "You lost the game";
    setTimeout(() => {
      wins.textContent = "Wins: 0";
      losses.textContent = "Losses: 0";
    }, 5000);
    computerWins = 0;
    playerWins = 0;
  }

  // if (computerWins > playerWins)
  // {
  //     // console.log(`The computer won with ${computerWins} and you have ${playerWins}` )
  //     resultDiv.textContent = `The computer won with ${computerWins} and you have ${playerWins}`
  // }
  // else if (playerWins > computerWins)
  // {
  //     //  console.log(`You won with ${playerWins} and the computer have ${computerWins}` )
  //     resultDiv.textContent = `You won with ${playerWins} and the computer have ${computerWins}`
  // }
  // else
  // {
  //     // console.log(`It's a tie you both have ${playerWins}`)
  //     resultDiv.textContent = `It's a tie you both have ${playerWins}`
  // }
}

function StartGameButton() {
  isStarted = true;
  console.log("people");
  winsLossesDiv.style.display = "block";
  if (computerWins !== 0 || playerWins !== 0)
    alert("The result got in the round may be discarded");
  wins.textContent = "Wins: 0";
  losses.textContent = "Losses: 0";
  resultDiv.textContent = "Game started";
  computerWins = 0;
  playerWins = 0;
}

function EndGameButton() {
  if (computerWins !== 0 || playerWins !== 0)
    alert("The result got in the round may be discarded");
  isStarted = false;
  winsLossesDiv.style.display = "none";
  resultDiv.textContent = "Game Closed";
}
