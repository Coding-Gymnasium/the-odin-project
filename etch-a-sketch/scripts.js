import { ResetSquares } from './components/ResetSquares.js';
import { PaintSquare } from './components/PaintSquare.js';
import { BuildGrid } from './components/BuildGrid.js';

const grid = document.querySelector('.grid');
const sizeSign = document.querySelector('#sizeSign');

const log = document.getElementById('log');
let inputedSize = 40;

BuildGrid(inputedSize, grid, sizeSign);
PaintSquare(grid);
ResetSquares(grid, sizeSign, inputedSize);

//---- Set Grid Size
document.getElementById('setGridSize').addEventListener('click', function (e) {
  let input = document.getElementById('number'),
    val = input.value;
  if (val > '60' || val < '20') {
    log.style.display = 'block';
    input.focus();
  } else {

    let sqs = grid.querySelectorAll('#square');
    sqs.forEach(item => item.remove())

    inputedSize = val;
    BuildGrid(inputedSize, grid, sizeSign);
  }
});
