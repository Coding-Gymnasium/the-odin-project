const clearBtn = document.querySelector('#clear-btn');

export const ClearSquares = (grid) => {
  clearBtn.addEventListener('click', () => {
    grid.querySelectorAll('.grid-item').forEach(sq => {
      sq.style.background = 'whitesmoke';
    });
  });
};
