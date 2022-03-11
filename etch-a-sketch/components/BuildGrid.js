export const BuildGrid = (inputedSize, grid, sizeSign) => {
  const square = "<div id='square'></div>";
  let size;
  let count = 1;

  sizeSign.textContent = `GRID: ${inputedSize} x ${inputedSize}`;
  grid.style.width = `${inputedSize * 10}px`;
  grid.style.height = `${inputedSize * 10}px`;
  size = inputedSize * inputedSize;
  
  while (count <= size) {
    grid.insertAdjacentHTML('afterbegin', square);
    count++;
  }
};
