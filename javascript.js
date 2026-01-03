const CHOICES = ['rock', 'paper', 'scissors'];

/* --- Computer input --- */

// Returns a random choice from the CHOICES array
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

/* --- User input --- */

function getHumanChoice () {
  let choice = prompt("Choose between rock - paper - scissors:");
  choice = choice.toLowerCase(); // made prompt case-insensitive
  return choice;
};

/* --- Score variables --- */ 

let humanScore = 0; // set to 0 initially
let computerScore = 0;

/* --- Gameplay of a single round --- */

function playRound(humanChoice, computerChoice) {

if (humanChoice === "rock" && computerChoice === "scissors") {
   humanScore++;
   return "You win! Rock beats Scissors";
 } else if (humanChoice === "rock" && computerChoice === "paper") {
   computerScore++;
   return "You lose! Paper beats Rock";
 } else if (humanChoice === "paper" && computerChoice === "rock") {
   humanScore++;
   return "You Win! Paper beats Rock";
 } else if (humanChoice === "paper" && computerChoice === "scissors") {
   computerScore++;
   return "You lose! Scissors beats Paper";
 } else if (humanChoice === "scissors" && computerChoice === "paper") {
   humanScore++;
   return "You Win! Scissors beats Paper";
 } else if (humanChoice === "scissors" && computerChoice === "rock") {
   computerScore++;
   return "You lose! Rock beats Scissors";
 } else {
   return "Tie!";
 }
}

/* --- Gameplay --- */

function playGame() {
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log("User says --" + humanSelection + "-- and Computer says --" + computerSelection + "--");
  const result = playRound(humanSelection, computerSelection);
  console.log(result);
  console.log("User Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
  console.log("User Wins!");
} else if (humanScore < computerScore) {
  console.log("Computer Wins!");
} else {
  console.log("It's a tie!");
}