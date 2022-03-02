export const plays = {
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
