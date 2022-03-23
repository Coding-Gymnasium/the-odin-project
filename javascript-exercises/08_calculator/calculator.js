const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  //-- Solution 1
  // const initialValue = 0;
  // const sum = arr.reduce(
  //   (previous, current) => previous + current,
  //   initialValue
  // );
  // return sum;

  //-- Solution 2
  // let sum = arr.reduce((previous, current) => previous + current, 0)
  // return sum;

  //-- Solution 3
  let sum = arr.reduce(function (previous, current) {
    return previous + current;
  }, 0);
  return sum;
};

const multiply = function (arr) {
  let mult = arr.reduce((previous, current) => previous * current, 1)
  return mult;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let facto = 1;
  if (num != 0 || num != 1) {
    for(let i = num; i >= 1; i--) {
      facto *= i;
    }
  }
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
