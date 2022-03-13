import { BuildGrid } from './BuildGrid.js';

export const ChangeGridDensity = (grid) => {
  const notifications = document.querySelector('.notifications');

  document.getElementById('setGridSize').addEventListener('click', function () {
    let input = document.getElementById('number'),
      val = input.value;
    if (val > 60 || val < 4) {
      notifications.style.display = 'block';
      input.focus();
    } else {
      notifications.style.display = 'none';
      BuildGrid(grid, val);
      document.querySelector('#sizeSign').textContent = `GRID: ${val} x ${val}`;
    }
  });
};
