const grid = document.querySelector('.grid');
const square = "<div id='square'></div>";
const sizeSign = document.querySelector('#sizeSign');

let inputedSize = 50;
let count = 1;
let pressing = false;

sizeSign.textContent = `GRID: ${inputedSize} x ${inputedSize}`;
grid.style.width = `${inputedSize * 10}px`;
grid.style.height = `${inputedSize * 10}px`;
let size = inputedSize * inputedSize;

while (count <= size) {
  grid.insertAdjacentHTML('afterbegin', square);
  count++;
}

const paint = (e) => {
  e.preventDefault();
  grid.addEventListener('mousemove', (e) => {
    if (pressing) e.target.style.background = 'black';
  });
  grid.addEventListener('mouseup', () => {
    pressing = false;
  });
};

grid.addEventListener('mousedown', (e) => {
  pressing = true;
  paint(e);
});
