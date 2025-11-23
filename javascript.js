
/* --- Computer input --- */

function getComputerChoice() {
  let choice = Math.random(); // Math.random() returns values between 0 and 1
  if (choice > 0.7) { // divide in 3 parts and made the conditional statements
    return "scissors";
  } else if (choice > 0.3) {
    return "paper";
  } else {
    return "rock";
  }
};

/* --- User input --- */

function getHumanChoice () {
  let choice = prompt("Choose between rock - paper - scissors:"); // User enters the value
  return choice;
};

/* --- Score variables --- */

let humanScore = 0; // set to 0 initially
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

const humanChoiceIns = humanChoice.toLowerCase(); // made humanChoice case-insensitive

/* --- Gameplay of a single round --- */

let playRound; // Here I used function expression after trying one day to make it work with function declaration.
  
  if (humanChoiceIns === "rock" && computerChoice === "scissors") {
    playRound = function() {
      return "You win! rock beats scissors";
    }
  } else if (humanChoiceIns === "rock" && computerChoice === "paper") {
    playRound = function() {
      return "You lose! Paper beats Rock";
    }
  } else if (humanChoiceIns === "paper" && computerChoice === "rock") {
    playRound = function() {
      return "You Win! Paper beats Rock";
     }
  } else if (humanChoiceIns === "paper" && computerChoice === "scissors") {
    playRound = function() {
      return "You lose! Scissors beats Paper";
     }
  } else if (humanChoiceIns === "scissors" && computerChoice === "paper") {
    playRound = function() {
      return "You Win! Scissors beats Paper";
     }
  } else if (humanChoiceIns === "scissors" && computerChoice === "rock") {
    playRound = function() {
      return "You lose! Rock beats Scissors";
     }
  } else {
    playRound = function() {
      return "Tie";
     }
}

console.log("User says " + humanChoiceIns)
console.log("Computer says " + computerChoice);
console.log(playRound());