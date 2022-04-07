import { Calculations } from './Calculations.js';

const currOperand = document.querySelector('.output');
let currOperandArr = [];
let set = [];
let calculation;
let input;
const operations = ['+', '−', '×', '÷', '='];
const clr = document.querySelector('.clear');
const clrAll = document.querySelector('.clearAll');

export const UpdateDisplay = (key) => {
  input = currOperandArr.join('');
  if (operations.includes(key)) {
    //---> don't add operation if there are no number in the current operand display
    if (!currOperandArr[0]) {
      alert('Enter a number first');
      return;
    }

    //---> checks for 0s on left side
    checkForZero();

    // build set array to run calculation
    set.push(input);
    set.push(key);

    if (set.length > 2) {
      calculation = Calculations(set[0], set[1], set[2]);
      set = [calculation];
      if (key != '=') set.push(key);
    }

    //---> Displays a string to show on current operand display
    calculation
      ? (currOperand.textContent = calculation)
      : (currOperand.textContent = input);
    currOperandArr = [];
  } else if (key === clr.textContent) {
    clearLast();
  } else if (key === clrAll.textContent) {
    clearAll();
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

const clearAll = () => {
  currOperand.textContent = 0;
  currOperandArr = [];
};

const clearLast = () => {
  currOperand.textContent = currOperand.textContent.slice(0, -1);
  currOperandArr.pop();
};

// TODO
// [ ] After pressing '=' and the result displays, one can press an operation
//     sign and perform a calculation using the previous result.
// [ ] When an operation sign gets pressed and there are no numbers to perform
//     and operation, it shouldn't highligth the button.
// [x] when I enter a number it shows in the bottom display.
// [x] when I press an operation sign following a number, the button gets highlighted with a border.
// when I add another number and
//  - [x] press equal, the result replaces the existing number.
//  - [x] press an operation button, the result replaces the existing number and the button gets highlighted with a border.
