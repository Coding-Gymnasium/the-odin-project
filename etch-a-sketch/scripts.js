import { BuildGrid } from './components/BuildGrid.js';
import { ChangeGridDensity } from './components/ChangeGridDensity.js';
import { ClearSquares } from './components/ClearSquares.js';
import { ColorPicker, ColorButton } from './components/ColorPicker.js';
import { PaintSquare } from './components/PaintSquare.js';

const grid = document.querySelector('.grid-container');
const sizeSign = document.querySelector('#sizeSign');
const gridDensity = 40;
sizeSign.textContent = `GRID: ${gridDensity} x ${gridDensity}`;

BuildGrid(gridDensity);
PaintSquare(grid);
ClearSquares(grid);
ColorPicker(grid);
ColorButton(grid);
ChangeGridDensity(grid, sizeSign);
