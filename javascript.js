const CHOICES = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn')
const container = document.querySelector('.container');

/* --- Computer input --- */

// Returns a random choice from the CHOICES array
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

/* --- User input --- */

// Each button triggers a round with the corresponding user choice
rockBtn.addEventListener('click', () => runEvent('rock'));

paperBtn.addEventListener('click', () => runEvent('paper'));

scissorsBtn.addEventListener('click', () => runEvent('scissors'));

// Runs one round of the game and updates UI and score
function runEvent(choice) {

// Clear previous game message when a new match starts
  if (humanScore === 0 && computerScore === 0) {
    announce.textContent = '';
  }

// Get computer choice and determine round result
  const computerChoice = getComputerChoice();
  const roundResult = playRound(choice, computerChoice);
  result.textContent = 'You pick ' + choice + ' and Computer says ' + computerChoice + ': ' + getResultText(roundResult);
  score.textContent = 'You: ' + humanScore + ' - Computer: ' + computerScore;

// Check for game winner
  if (humanScore >= 5) {
    announce.textContent = 'You won the game!!!';
    humanScore = 0;
    computerScore = 0;
  }
  if (computerScore >= 5) {
    announce.textContent = 'You lost the game!!!';
    humanScore = 0;
    computerScore = 0;
  }

}

// Round result text
const result = document.createElement('div');
result.className = 'result'
container.appendChild(result);

function getResultText(result) {
  if (result === 'win') {
    humanScore++;
    return 'You win!'; 
  }

  if (result === 'lose') {
    computerScore++;
    return 'You lose!'; 
  }

  return 'Tie!';
}

/* --- Gameplay of a single round --- */

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock') 
    ) {
            return "win";
    } else {
        return "lose";
    }
}

/* --- Score --- */

let humanScore = 0;
let computerScore = 0;

// Displays current score
const score = document.createElement('p');
score.className ='score';
container.appendChild(score);

// Displays game winner message
const announce = document.createElement('p');
  announce.className = 'announce';
  container.appendChild(announce);


