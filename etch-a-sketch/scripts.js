import { ClearButton } from './components/ClearGrid.js';
import { PaintSquare } from './components/PaintSquare.js';

const grid = document.querySelector('.grid');
const square = "<div id='square'></div>";
const sizeSign = document.querySelector('#sizeSign');
const log = document.getElementById('log');
let inputedSize = 40;
let size;
let count = 1;

//---- Set Grid Size

sizeSign.textContent = `GRID: ${inputedSize} x ${inputedSize}`;

document.getElementById('setGridSize').addEventListener('click', function (e) {
  let input = document.getElementById('number'),
    val = input.value;
  if (val > '60' || val < '20' || val % 20 != 0) {
    log.style.display = 'block';
    input.focus();
  } else {
    inputedSize = val;
    sizeSign.textContent = `GRID: ${inputedSize} x ${inputedSize}`;
    grid.style.width = `${inputedSize * 10}px`;
    grid.style.height = `${inputedSize * 10}px`;
    size = inputedSize * inputedSize;
  }
});


grid.style.width = `${inputedSize * 10}px`;
grid.style.height = `${inputedSize * 10}px`;
size = inputedSize * inputedSize;

//---- Clear Grid

ClearButton(grid, sizeSign, inputedSize);

while (count <= size) {
  grid.insertAdjacentHTML('afterbegin', square);
  count++;
}

//---- paint squares
PaintSquare(grid);
