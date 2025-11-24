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
  let choice = prompt("Choose between rock - paper - scissors:");
  return choice;
};

/* --- Score variables --- */ 
let humanScore = 0; // set to 0 initially
let computerScore = 0;

/* Set the variables for playRound function */
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

humanChoice = humanChoice.toLowerCase(); // made humanChoice case-insensitive

/* --- Gameplay of a single round --- */
function playRound(humanChoice, computerChoice) {
 if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore = ++humanScore;
   return "You win! rock beats scissors";
 } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore = ++computerScore;
   return "You lose! Paper beats Rock";
 } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore = ++humanScore;
   return "You Win! Paper beats Rock";
 } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore = ++computerScore;
   return "You lose! Scissors beats Paper";
 } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore = ++humanScore;
   return "You Win! Scissors beats Paper";
 } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore = ++computerScore;
   return "You lose! Rock beats Scissors";
 } else {
    humanScore = ++humanScore;
    computerScore = ++computerScore;
   return "Tie!";
 }
}

console.log("User says " + humanChoice)
console.log("Computer says " + computerChoice);
console.log(playRound(humanChoice, computerChoice));
console.log("User Score: " + humanScore);
console.log("Computer Score: " + computerScore);