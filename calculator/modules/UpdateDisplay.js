import { Calculations } from './Calculations.js';

const currOperand = document.querySelector('.output');
let currOperandArr = [];
let set = [];
let calculation;
const operations = ['+', '−', '×', '÷', '='];


export const UpdateDisplay = (key) => {
  if (operations.includes(key)) {
    //---> don't add operation if there are no number in the current operand display
    if (!currOperandArr[0]) {
      alert('Enter a number first');
      return;
    }
    //---> checks for 0s on left side
    checkForZero();

    // build set array to run calculation
    set.push(currOperandArr.join(''));
    set.push(key);

    if (set.length > 2) {
      calculation = Calculations(set[0], set[1], set[2]);
      set = [calculation];
      if (key != '=') set.push(key);
    }

    //---> Displays a string to show on current operand display
    currOperand.textContent = calculation;

    currOperandArr = [];
  } else {
    checkForZero();
    currOperandArr.push(key);
    currOperand.textContent = currOperandArr.join('');
  }
};

const checkForZero = () => {
  if (currOperandArr[0] == '0') {
    currOperandArr.shift();
  }
};

// when I enter a number it shows in the bottom display.
// when I press an operation sign following a number, the button gets highlighted with a border.
// when I add another number and
//  - press equal, the result replaces the existing number.
//  - press an operation button, the result replaces the existing number and the button gets highlighted with a border.
