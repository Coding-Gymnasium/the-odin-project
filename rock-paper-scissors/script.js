// const plays = {
//   rock: {
//     rock: ["It's a draw", 0, 0],
//     paper: ['You lose!', 0, 1],
//     scissors: ['You win!', 1, 0],
//   },
//   paper: {
//     rock: ['You win!', 1, 0],
//     paper: ["It's a draw", 0, 0],
//     scissors: ['You lose!', 0, 1],
//   },
//   scissors: {
//     rock: ['You lose!', 0, 1],
//     paper: ['You win!', 1, 0],
//     scissors: ["It's a draw", 0, 0],
//   },
// };

// const plays = require('./plays.js./plays.js./plays.js./plays.js');
import { plays } from './plays.js';

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
  let message = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}. ${
    result[0]
  }`;
  let plScore = result[1];
  let aiScore = result[2];

  return {
    message,
    plScore,
    aiScore,
  };
}

// 3. keep score based on round results
let ps = document.getElementById('player');
let as = document.getElementById('ai');
let hand = document.getElementById('hand');
let result = document.getElementById('result');

function roundReport(plResults, aiResults) {
  if (plResults > aiResults) result.textContent = `You Won! 🏆`;
  if (plResults == aiResults) result.textContent = `It's a Tie! 🤷🏻‍`;
  if (plResults < aiResults) result.textContent = `You Lost 👎`;
}

function game() {
  let play = playRound();

  // Reports winner or loser at the end.
  roundReport(plScore, aiScore);

  // console.log results for each round
  console.log(play.message);
  hand.textContent = play.message;
  plScore += play.plScore;
  aiScore += play.aiScore;

  // Round lasts 5 times.
  if (plScore === 5 || aiScore === 5) {
    if (plScore === 5) console.log('You Won!!!');
    if (aiScore === 5) console.log('You Lost!!!');
    aiScore = 0;
    plScore = 0;
  }
  // keep score based on round results
  ps.textContent = `Player: ${plScore}`;
  as.textContent = `Ai: ${aiScore}`;
}
