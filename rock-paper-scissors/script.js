function computerPlay() {
  const ai = ['Rock', 'Paper', 'Scissors'];
  return ai[Math.floor(Math.random() * 3)];
}

// let computerSelection = computerPlay().toLowerCase();
// let playerSelection = prompt('Select Rock, Paper, Scissors').toLowerCase();

function playRound() {
let computerSelection = computerPlay().toLowerCase();
let playerSelection = prompt('Select Rock, Paper, Scissors').toLowerCase();
  const plays = {
    rock: { rock: "It's a draw", paper: 'You lose!', scissors: 'You win!' },
    paper: { rock: 'You win!', paper: "It's a draw", scissors: 'You lose!' },
    scissors: { rock: 'You lose!', paper: 'You win!', scissors: "It's a draw" },
  };

  return `Player: ${playerSelection} vs Computer: ${computerSelection}. ${plays[playerSelection][computerSelection]}`;
}

function game() {
  // 1. run function.
  // 2. console.log results for the round 
  // 3. keep score based on round results
  // 4. reports winner or loser at the end.
}

console.log( game() );
