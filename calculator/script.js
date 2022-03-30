import { Calculations } from './components/Calculations.js';

const prevOperand = document.querySelector('#previous-operand');
const currOperand = document.querySelector('#current-operand');
const btnsLeft = document.querySelector('.buttons-left');
const btnright = document.querySelector('.buttons-right');
const numbers = btnsLeft.querySelectorAll('.number');
const otherBtn = btnright.querySelectorAll('.other-btn');
const preOperandArr = [];
let currOperandArr = [];
const operations = ['+', '−', '×', '÷', '='];
// const clr = document.querySelector('.clear');
// const allClr = document.querySelector('.allClear');

// const division = document.querySelector('.division');
// const multiplication = document.querySelector('.multiplication');
// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');
// const equal = document.querySelector('.equal');

const updateOperands = (number) => {
  if (operations.includes(number)) {
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }
    let total = `${prevOperand.textContent} ${currOperandArr.join(
      ''
    )} ${number}`;

    let newOutput = Calculations(total);

    prevOperand.textContent = total;
    // prevOperand.textContent = newOutput;

    // prevOperand.textContent = newOutput;
    currOperand.textContent = '0';
    currOperandArr = ['0'];
  } else {
    if (currOperandArr[0] == '0') {
      currOperandArr.shift();
    }
    currOperandArr.push(number);
    currOperand.textContent = currOperandArr.join('');
  }
};

// ----- Buttons
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    let newNumber = number.textContent;
    updateOperands(newNumber);
  });
});

otherBtn.forEach((button) => {
  button.addEventListener('click', () => {
    let newButton = button.textContent;
    updateOperands(newButton);
  });
});

// ---- Clear buttons

// const clearLast = () => {
//   clr.addEventListener('mousedown', () => {
//     currOperand.textContent = 0;
//     prevOperand.textContent = prevOperand.textContent.slice(0, -1);
//   });
// };
//
// clearLast();
