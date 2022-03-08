const clearBtn = document.querySelector('#clear-btn');

export const ClearButton = (grid) => {
  clearBtn.addEventListener('click', () => {
    let arr = Array.from(grid.querySelectorAll('#square'));
    for (const sq of arr) {
      sq.style.background = 'ivory';
    }
  });
};
