
/* Math.random() returns values between 0 and 1 - I divided that in 3 parts and made the conditional statement*/
function getComputerChoice() {
  const computerChoice = Math.random(); 
  if (computerChoice > 0.7) {
    return "Scissors";
  } else if (computerChoice > 0.3) {
    return "Paper";
  } else {
    return "Rock";
  }
};



