import { BuildGrid } from './BuildGrid.js';

export const ChangeGridSize = (grid, inputedSize, sizeSign) => {
  const log = document.getElementById('log');

  document.getElementById('setGridSize').addEventListener('click', function () {
    let input = document.getElementById('number'),
      val = input.value;
    if (val > '60' || val < '20') {
      log.style.display = 'block';
      input.focus();
    } else {
      log.style.display = 'none';

      let sqs = grid.querySelectorAll('#square');
      sqs.forEach((item) => item.remove());

      inputedSize = val;
      BuildGrid(inputedSize, grid, sizeSign);
    }
  });
};
