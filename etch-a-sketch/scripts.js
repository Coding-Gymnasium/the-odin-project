import { ResetSquares } from './components/ResetSquares.js';
import { PaintSquare } from './components/PaintSquare.js';
import { BuildGrid } from './components/BuildGrid.js';
import { ChangeGridSize } from './components/ChangeGridSize.js';
import { ColorPicker } from './components/ColorPicker.js';

const grid = document.querySelector('.grid');
const sizeSign = document.querySelector('#sizeSign');
const pencilBtn = document.querySelector('.chgPenSize');
let inputedSize = 40;

BuildGrid(inputedSize, grid, sizeSign);
PaintSquare(grid);
ResetSquares(grid, sizeSign, inputedSize);
ChangeGridSize(grid, inputedSize, sizeSign);
ColorPicker(grid);

pencilBtn.addEventListener('click', (e) => {
  let size = e.target.value;
  BuildGrid(inputedSize,grid, sizeSign, size)
});
