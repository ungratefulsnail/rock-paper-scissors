
/* --- Computer input --- */
function getComputerChoice() {
  const choice = Math.random(); // Math.random() returns values between 0 and 1
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
  const choice = prompt("Choose between rock - paper - scissors:"); // User enters the value
  return choice;
};

/* --- Score variables --- */
let humanScore = 0; // set to 0 initially
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

const humanChoiceIns = humanChoice.toLowerCase(); // made humanChoice case-insensitive

/* --- Gameplay of a single round --- */
function playRound(humanChoiceIns, computerChoice) {
  
  if (humanChoiceIns === "rock" && computerChoice === "scissors") {
    return "You win! rock beats scissors";
  } else if (humanChoiceIns === "rock" && computerChoice === "paper") {
    return "You lose! Paper beats Rock";
  } else if (humanChoiceIns === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock";
  } else if (humanChoiceIns === "paper" && computerChoice === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (humanChoiceIns === "scissors" && computerChoice === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (humanChoiceIns === "scissors" && computerChoice === "rock") {
    return "You lose! Rock beats Scissors";
  } else {
    return "Tie";
  }
}

console.log("User says " + humanChoiceIns)
console.log("Computer says " + computerChoice);
console.log(playRound());