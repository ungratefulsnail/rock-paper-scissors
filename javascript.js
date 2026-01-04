const CHOICES = ['rock', 'paper', 'scissors'];

/* --- Computer input --- */

// Returns a random choice from the CHOICES array
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomChoice];
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