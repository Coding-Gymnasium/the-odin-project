function computerPlay() {
  const ai = ['Rock', 'Paper', 'Scissors'];
  return ai[Math.floor(Math.random() * 3)];
}

function playRound() {
  let computerSelection = computerPlay().toLowerCase();
  // let playerSelection = prompt('Select Rock, Paper, Scissors').toLowerCase();
  let playerSelection = 'rock';

  const plays = {
    rock: {
      rock: ["It's a draw", 0, 0],
      paper: ['You lose!', 0, 1],
      scissors: ['You win!', 1, 0],
    },
    paper: {
      rock: ['You win!', 1, 0],
      paper: ["It's a draw", 0, 0],
      scissors: ['You lose!', 0, 1],
    },
    scissors: {
      rock: ['You lose!', 0, 1],
      paper: ['You win!', 1, 0],
      scissors: ["It's a draw", 0, 0],
    },
  };

  let result = plays[playerSelection][computerSelection];
  let message = `Player: ${playerSelection} vs Computer: ${computerSelection}. ${result[0]}`;
  let plScore = result[1];
  let aiScore = result[2];

  return {
    message,
    plScore,
    aiScore,
  };
}

function game() {
  let plScore = 0;
  let aiScore = 0;

  // 1. run function 5 times.

  for (let i = 0; i < 5; i++) {
    let play = playRound();
    // 2. console.log results for each round
    console.log(play.message);
    plScore += play.plScore;
    aiScore += play.aiScore;
    console.log(`Player: ${plScore}, AI: ${aiScore}`);
  }

  // 3. keep score based on round results

  console.log(`Player: ${plScore}, AI: ${aiScore}`);

  // 4. reports winner or loser at the end.

}

console.log(game());
