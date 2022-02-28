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
const btns = document.querySelectorAll('button');
let plScore = 0;
let aiScore = 0;

// ------- Audio
const audio = new Audio(
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3'
);
const audio2 = new Audio(
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3'
);
let playerSelection;

//---- Buttons actions
btns.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    audio2.play();
  });

  btn.addEventListener('mouseup', () => {
    audio.play();
    playerSelection = `${btn.id}`;
    game();
  });
});

// --- AI Play
function computerPlay() {
  const ai = ['Rock', 'Paper', 'Scissors'];
  return ai[Math.floor(Math.random() * 3)];
}

function playRound() {
  let computerSelection = computerPlay().toLowerCase();
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

function finalReport(plResults, aiResults) {
  plResults > aiResults
    ? console.log(`${plResults} - ${aiResults}, You Won! 🏆`)
    : plResults == aiResults
    ? console.log(`${plResults} - ${aiResults}, It's a Tie! 🤷🏻‍♂️`)
    : console.log(`${plResults} - ${aiResults}, You Lost 👎`);
}

function game() {

  let play = playRound();
  // 2. console.log results for each round
  console.log(play.message);
  plScore += play.plScore;
  aiScore += play.aiScore;
  console.log(`Player: ${plScore}, AI: ${aiScore}`);

  // 3. keep score based on round results

  console.log(`Player: ${plScore}, AI: ${aiScore}`);

  // 4. reports winner or loser at the end.
  finalReport(plScore, aiScore);
  // 1. run function 5 times.
  if(plScore === 5 || aiScore === 5 ) {
    if (plScore === 5) console.log('You Won!!!')
    if (aiScore === 5) console.log('You Lost!!!')
    aiScore = 0;
    plScore = 0;
  }
}
