const grid = document.querySelector('.grid');
const square = "<div id='square'></div>";

let inputedSize = 100;
grid.style.width = `${inputedSize * 10}px`;
grid.style.height = `${inputedSize * 10}px`;
let size = inputedSize * inputedSize;
let count = 1;

while (count <= size) {
  grid.insertAdjacentHTML('afterbegin', square);
  count++;
}
