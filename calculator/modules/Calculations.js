export const Calculations = (...args) => {
  let symbol = args[1];
  if (symbol === '+') return sum(args[0], args[2]);
  if (symbol === '−') return substraction(args[0], args[2]);
  if (symbol === '×') return multiplication(args[0], args[2]);
  if (symbol === '÷') return division(args[0], args[2]);

};

const sum = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const substraction = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};

const multiplication = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

const division = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};
