import { Calculations } from './Calculations.js';

const history = document.querySelector('#previous-operand');
const currOperand = document.querySelector('#current-operand');
const historyArr = [];
let currOperandArr = [];
let set = [];
const operations = ['+', '−', '×', '÷', '='];

export const UpdateDisplay = (key) => {
  if (operations.includes(key)) {
    //---> checks for 0s on left side
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }

    //---> don't add operation if there are no number in the current operand display
    if (!currOperandArr[0]) return;

    let numberString = currOperandArr.join('');
    set.push(numberString);
    set.push(key);
    console.log('set: ', set);
    if (set.length > 2)
      currOperand.textContent = Calculations(set[0], set[1], set[2]);

    //---> Creates a string to show on top display
    let input = `${history.textContent} ${numberString} ${key}`;
    history.textContent = input;
    // currOperand.textContent = '0';
    currOperandArr = ['0'];
  } else {
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }
    currOperandArr.push(key);
    currOperand.textContent = currOperandArr.join('');
  }
};
