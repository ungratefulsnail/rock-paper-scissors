
/* --- Computer input --- */
function getComputerChoice() {
  const computerChoice = Math.random(); // Math.random() returns values between 0 and 1
  if (computerChoice > 0.7) { // divide in 3 parts and made the conditional statements
    return "Scissors";
  } else if (computerChoice > 0.3) {
    return "Paper";
  } else {
    return "Rock";
  }
};

/* --- User input --- */
function getHumanChoice () {
  const humanChoice = prompt("Choose between Rock - Paper - Scissors:"); // User enters the value
  return humanChoice;
};

