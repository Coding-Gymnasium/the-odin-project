const prevOperand = document.querySelector('#previous-operand');
const currOperand = document.querySelector('#current-operand');
const btnsLeft = document.querySelector('.buttons-left');
const btnright = document.querySelector('.buttons-right');
const numbers = btnsLeft.querySelectorAll('.number');
const otherBtn = btnright.querySelectorAll('.other-btn');
const preOperandArr = [];
const clr = document.querySelector('.clear');
const allClr = document.querySelector('.allClear');
const division = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');

const updateOperands = (number) => {
  preOperandArr.push(number);
  prevOperand.textContent = preOperandArr.join(' ');
  currOperand.textContent = number;
};

// ----- Numbers
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


// ---- Other buttons


// const clearLast = () => {
//   clr.addEventListener('mousedown', () => {
//     currOperand.textContent = 0;
//     prevOperand.textContent = prevOperand.textContent.slice(0, -1);
//   });
// };
//
// clearLast();
