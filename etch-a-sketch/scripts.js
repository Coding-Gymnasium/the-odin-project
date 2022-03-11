import { ResetSquares } from './components/ResetSquares.js';
import { PaintSquare } from './components/PaintSquare.js';
import { BuildGrid } from './components/BuildGrid.js';
import { ChangeGridSize } from './components/ChangeGridSize.js';
import { ColorPicker } from './components/ColorPicker.js';

const grid = document.querySelector('.grid');
const sizeSign = document.querySelector('#sizeSign');

let inputedSize = 40;

BuildGrid(inputedSize, grid, sizeSign);
PaintSquare(grid);
ResetSquares(grid, sizeSign, inputedSize);
ChangeGridSize(grid, inputedSize, sizeSign);
ColorPicker(grid);

const pencilBtn = document.querySelector('.chgPenSize');

pencilBtn.addEventListener('click', (e) => {
  let size = e.target.value;

  let sqs = grid.querySelectorAll('#square');
  sqs.forEach((square) => {
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.background = 'red';
    square.style.border = '0.25px solid black';
  });
});
