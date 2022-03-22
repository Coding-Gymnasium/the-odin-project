import { PaintSquare } from './PaintSquare.js';

const colorpicker = document.querySelector('#colorpicker');
const colorPalette = document.querySelector('.colorPalette');
const colorButtons = colorPalette.querySelectorAll('.clr-btn');

export const ColorPicker = (grid) => {
  colorpicker.addEventListener('change', () => {
    PaintSquare(grid, colorpicker.value);
  });
};

export const ColorButton = (grid) => {
  colorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      let cb = document.getElementById(btn.id);
      let compStyles = window.getComputedStyle(cb);
      let color = compStyles.getPropertyValue('background-color');
      PaintSquare(grid, color);
    });
  });
};
