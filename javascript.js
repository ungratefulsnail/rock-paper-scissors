const CHOICES = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn')
const container = document.querySelector('.container');

const result = document.createElement('div');
result.className = 'result'
container.appendChild(result);

/* --- Computer input --- */

// Returns a random choice from the CHOICES array
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
}

/* Display round result */

// The user input comes from buttons and shows the result in a new created div
rockBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('rock', computerChoice);
    result.textContent = 'Computer says ' + computerChoice + ': ' + getResultText(roundResult);
})

paperBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('paper', computerChoice);
    result.textContent = 'Computer says ' + computerChoice + ': ' + getResultText(roundResult);
})

scissorsBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('scissors', computerChoice);
    result.textContent = 'Computer says ' + computerChoice + ': ' + getResultText(roundResult);
})

function getResultText(result) {
  if (result === 'win') return 'You win!';
  if (result === 'lose') return 'You lose!';
  return 'Tie!';
}

/* --- Gameplay of a single round --- */

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return "tie";
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock') 
    ) {
            console.log("You win!");
            return "win";
    } else {
        console.log("You lose!");
        return "lose";
    }
}