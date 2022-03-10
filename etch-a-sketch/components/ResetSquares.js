const clearBtn = document.querySelector('#clear-btn');

export const ResetSquares = (grid, inputedSize) => {
  clearBtn.addEventListener('click', () => {
    let arr = Array.from(grid.querySelectorAll('#square'));
    for (const sq of arr) {
      sq.style.background = 'ivory';
    }
    return inputedSize = 40;
  });
};
