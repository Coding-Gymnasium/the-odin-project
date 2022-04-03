import { Calculations } from './Calculations.js';

const prevOperand = document.querySelector('#previous-operand');
const currOperand = document.querySelector('#current-operand');
const preOperandArr = [];
let currOperandArr = [];
const operations = ['+', '−', '×', '÷', '='];

export const UpdateDisplay = (key) => {
  if (operations.includes(key)) {
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }
    let total = `${prevOperand.textContent} ${currOperandArr.join('')} ${key}`;

    Calculations(total);

    prevOperand.textContent = total;

    currOperand.textContent = '0';
    currOperandArr = ['0'];
  } else {
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }
    currOperandArr.push(key);
    currOperand.textContent = currOperandArr.join('');
  }
};
