import { Calculations } from './Calculations.js';

const currOperand = document.querySelector('.output');
const clr = document.querySelector('.clear');
const clrAll = document.querySelector('.clearAll');

const currOperandArr = [];
const set = [];
const result = [];
const operations = ['+', '−', '×', '÷', '='];

export const UpdateDisplay = (key) => {
  console.log('key: ', key);
  if (operations.includes(key)) {
    let calculation;
    let input;

    //---> don't add operation if there are no number in the current operand display
    if (!currOperandArr[0]) {
      alert('Enter a number first');
      return;
    }
    //---> checks for 0s on left side
    checkForZero();

    // build set array to run calculation
    input = currOperandArr.join('');
    set.push(input);
    set.push(key);

    // run calculation if complete set
    if (set.length > 2) {
      calculation = Calculations(set[0], set[1], set[2]);
      set.splice(0, set.length, calculation); // replace set values with calculation value
      result.splice(0, result.length, calculation); // replace result value with calculation value

      // only push key into set if it is not '='
      if (key != '=') set.push(key);

      console.log('input: ', input);
      console.log('set: ', set);
      console.log('result: ', result);
      console.log('currOperandArr: ', currOperandArr);
      console.log('currOperand: ', currOperand);
    }

    //---> Displays a string to show on current operand display
    calculation
      ? (currOperand.textContent = calculation)
      : (currOperand.textContent = input);
    currOperandArr.length = 0;
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
  currOperandArr.length = 0;
  result.length = 0;
  set.length = 0;
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
