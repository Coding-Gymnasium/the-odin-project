import { UpdateDisplay } from './UpdateDisplay.js';

const grid = document.querySelector('.calculator-grid');
const keys = grid.querySelectorAll('#button');

export const GetKeys = () => {
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      let keyClass = key.classList.value.split(' ');
      hightlightKey(keyClass);
      let newKey = key.textContent;
      UpdateDisplay(newKey);
    });
  });
};

const hightlightKey = (keyClass) => {
  if (keyClass.includes('other-btn')) {
    RemoveHighlight();
    document.querySelector(`.${keyClass[0]}`).classList.add('active-btn');
  }
};

export const RemoveHighlight = () => {
  keys.forEach((key) => {
    if (key.classList.value.split(' ').includes('active-btn')) {
      key.classList.remove('active-btn');
    }
  });
};
