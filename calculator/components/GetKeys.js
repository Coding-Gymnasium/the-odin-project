import { UpdateDisplay } from './UpdateDisplay.js';

const grid = document.querySelector('.calculator-grid');
const keys = grid.querySelectorAll('#button');


export const GetKeys = () => {
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      let newKey = key.textContent;
      UpdateDisplay(newKey);
    });
  });
};
