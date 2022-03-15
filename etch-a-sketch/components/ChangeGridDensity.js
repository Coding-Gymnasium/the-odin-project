import { BuildGrid } from './BuildGrid.js';

export const ChangeGridDensity = (grid, sizeSign) => {
  const notifications = document.querySelector('#log');

  document.getElementById('setGridSize').addEventListener('click', function () {
    let input = document.getElementById('number'),
      val = input.value;
    if (val > 60 || val < 4) {
      notifications.style.display = 'block';
      input.focus();
    } else {
      notifications.style.display = 'none';
      sizeSign.textContent = `GRID: ${val} x ${val}`;

      BuildGrid(val);
    }
  });
};
