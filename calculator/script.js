const prevOperand = document.querySelector('#previous-operand');
const currOperand = document.querySelector('#current-operand');
const btnsLeft = document.querySelector('.buttons-left');
const numbers = btnsLeft.querySelectorAll('.number');
const preOperandArr = [];

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    let newNumber = number.textContent;
    preOperandArr.push(newNumber);
    prevOperand.textContent = preOperandArr.join(' ');
    currOperand.textContent = newNumber;
  });
});
