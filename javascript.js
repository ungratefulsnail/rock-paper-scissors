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

/* --- Display round result --- */

// The user input comes from buttons and shows the result in a new created div
rockBtn.addEventListener('click', () => runEvent('rock'));

paperBtn.addEventListener('click', () => runEvent('paper'));

scissorsBtn.addEventListener('click', () => runEvent('scissors'));

function runEvent(choice) {
  const computerChoice = getComputerChoice();
  const roundResult = playRound(choice, computerChoice);
  result.textContent = 'You pick ' + choice + ' and Computer says ' + computerChoice + ': ' + getResultText(roundResult);
  score.textContent = 'You: ' + humanScore + ' - Computer: ' + computerScore;
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

// Score result text
const score = document.createElement('p');
score.className ='score';
container.appendChild(score);



