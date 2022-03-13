export const BuildGrid = (gridDensity) => {
  gridDensity = Number.parseInt(gridDensity);
  let contSize = 600;
  let gridWidth = contSize / gridDensity;
  const grid = document.querySelector('.grid-container');

  grid.style.width = `${contSize}px`;
  grid.style.height = `${contSize}px`;
  grid.style.gridTemplateColumns = ` repeat( ${gridDensity}, ${gridWidth}px) `;
  grid.style.gridTemplateRows = ` repeat( ${gridDensity}, ${gridWidth}px)`;

  let sqs = document.querySelectorAll('.grid-item');

  if (sqs) sqs.forEach((sq) => sq.remove());

  for (let i = 0; i < gridDensity ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    grid.appendChild(square);
  }
};
