import { BuildGrid } from './components/BuildGrid.js';
import { ChangeGridDensity } from './components/ChangeGridDensity.js';
import { ClearSquares } from './components/ClearSquares.js';
import { ColorPicker } from './components/ColorPicker.js';
import { PaintSquare } from './components/PaintSquare.js';

const grid = document.querySelector('.grid-container');
const sizeSign = document.querySelector('#sizeSign');
const gridDensity = 40;

BuildGrid(sizeSign, gridDensity);
PaintSquare(grid);
ClearSquares(grid);
ColorPicker(grid);
ChangeGridDensity(grid);
