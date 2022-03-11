import {PaintSquare} from './PaintSquare.js';

export const ColorPicker = (grid) => {
  const colorpicker = document.querySelector('#colorpicker');
  colorpicker.addEventListener('change', () => {
    PaintSquare(grid, colorpicker.value);
  });
};
