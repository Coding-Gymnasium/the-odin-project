import { plays } from './plays.js';
import {
  audio,
  audio2,
  fanfair,
  disappointment,
  cash,
  fail,
  swoosh,
} from './audioFiles.js';

const btns = document.querySelectorAll('.button');

let plScore = 0;
let aiScore = 0;
let playerSelection;
let ps = document.getElementById('player');
let as = document.getElementById('ai');
let hand = document.getElementById('hand');
let result = document.getElementById('result');

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

// Play Round
function playRound() {
  let computerSelection = computerPlay().toLowerCase();
  let result = plays[playerSelection][computerSelection];
  let message = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
  let playerScore = result[0];
  let computerScore = result[1];

  return {
    message,
    playerScore,
    computerScore,
  };
}

function roundReport(plResults, aiResults) {
  if (plResults > aiResults) {
    result.textContent = `You Win 🏆`;
    cash.load();
    cash.play();
  }
  if (plResults == aiResults) {
    result.textContent = `It's a Tie! 🤷🏻‍`;
    swoosh.load();
    swoosh.play();
  }
  if (plResults < aiResults) {
    result.textContent = 'You Lose 👎';
    fail.load();
    fail.play();
  }
}

function game() {
  let play = playRound();

  // Reports winner or loser at the end of each round.
  roundReport(play.playerScore, play.computerScore);
  hand.textContent = play.message;

  // Updates the scores
  plScore += play.playerScore;
  aiScore += play.computerScore;

  // Round lasts 5 times.
  if (plScore === 5 || aiScore === 5) {
    if (plScore === 5) {
      hand.textContent = `You Won  ${plScore} to ${aiScore} 🎉 🏆`;
      fanfair.play();
      result.textContent = '';
    }
    if (aiScore === 5) {
      hand.textContent = `You Lost  ${plScore} to ${aiScore} 😬 🙈`;
      disappointment.play();
      result.textContent = '';
    }
    aiScore = 0;
    plScore = 0;
  }
  // Displays score based on round results
  ps.textContent = `Player: ${plScore}`;
  as.textContent = `Computer: ${aiScore}`;
}
