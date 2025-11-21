# rock-paper-scissors
The Odin Project - project - the game Rock Paper Scissors

 - The input is one of the 3 choices (rock, paper, scissors);
 - The output is the winner choice between user and computer (ex: "Paper beats Rock - Computer wins!");
 - The program in between should get the input choice from User, choose a random choice for Computer and choose a winner for the round, and after 5 rounds choose a winner for the game;

Plan:

  - Interface - console output;
  - Inputs - data comes from a user prompt;
  - Output - the users sees the result from comparing his input with the random choice of the computer;


  - Algorithm
    1. Ask the choice from User;
    2. Get the choice from Computer;
    3. Compare the choices and choose the winner;
    4. Record the score;
    5. Play 5 rounds to declare the winner of the game;


Pseudocode:

1. Computer random choice function (Math.random returns values between 0 and 1);

function getComputerChoice is:
 - the computerChoice variable is a random number;
 - if number > 0.7 return "Scissors";
 - else if number > 0.3 return "Paper";
 - else return "Rock";


2. Ask human for a choice;

function getHumanChoice is:
 - the humanChoice variable is a prompt that shows the message "Choose between Rock - Paper - Scissors";
 - return humanChoice input;
 


3. Declare the players score variable with initial value;

 - humanScore is 0;
 - computerScore is 0;


4. The logic to play a single round;

 - function playRound has parameters humanChoice and computerChoice;
 - humanChoice must be case-sensitive;

 - if humanChoice is Rock AND computerChoice is Scissors return "You win! Rock beats Scissors";
 - add 1 point to humanScore with increment++;

 - else if humanChoice is Rock AND computerChoice is Paper return "You lose! Paper beats Rock";
 - add 1 point to computerScore with increment++;

 - else if humanChoice is Paper AND computerChoice is Rock return "You Win! Paper beats Rock";
 - add 1 point to humanScore with increment++;
	 
 - else if humanChoice is Paper AND computerChoice is Scissors return "You lose! Scissors beats Paper"; 
 - add 1 point to computerScore with increment++;

 - else if humanChoice is Scissors AND computerChoice is Paper return "You win! Scissors beats Paper";
 - add 1 point to humanScore with increment++;

 - else if humanChoice is Scissors AND computerChoice is Rock return "You lose! Rock beats Scissors";
 - add 1 point to computerScore with increment++;

 - Make constant humanSelection and assign it getHumanChoice value;
 - Make constant computerSelection and assign it getComputerChoice value;

 - Apply playRound function to the constants;


5. The logic to play the entire game;

 - function playGame calls playRound to play 5 times, keeps track of the score and declares a winner;
	
