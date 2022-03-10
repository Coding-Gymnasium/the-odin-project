import { ResetSquares } from './components/ResetSquares.js';
import { PaintSquare } from './components/PaintSquare.js';
import { BuildGrid } from './components/BuildGrid.js';

const grid = document.querySelector('.grid');
const sizeSign = document.querySelector('#sizeSign');
const log = document.getElementById('log');
let inputedSize = 40;

//----- Create Grid
BuildGrid(inputedSize, grid, sizeSign);

//---- paint squares
PaintSquare(grid);

//---- Reset Squares
ResetSquares(grid, sizeSign, inputedSize);

//---- Set Grid Size
document.getElementById('setGridSize').addEventListener('click', function (e) {
  let input = document.getElementById('number'),
    val = input.value;
  if (val > '60' || val < '20' || val % 20 != 0) {
    log.style.display = 'block';
    input.focus();
  } else {
    inputedSize = val;
    BuildGrid(inputedSize, grid, sizeSign);
  }
});
