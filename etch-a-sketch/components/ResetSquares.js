const clearBtn = document.querySelector('#clear-btn');

export const ResetSquares = (grid, sizeSign, inputedSize) => {
  clearBtn.addEventListener('click', () => {
    let arr = Array.from(grid.querySelectorAll('#square'));
    for (const sq of arr) {
      sq.style.background = 'ivory';
    }
    sizeSign.textContent = `GRID: 40 x 40`;
    return inputedSize = 40;
  });
};
