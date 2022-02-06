const seven = document.getElementById('add7');
const aTimesB = document.getElementById('multiply');
const addCapitals = document.getElementById('capitalize');
const getLastLetter = document.getElementById('lastLetter');

const add7 = (num) => {
  seven.innerHTML = `Add 7 Result: ${num + 7}`;
};

const multiply = (num1, num2) => {
  aTimesB.innerHTML = `${num1} x ${num2} = ${num1 * num2}`;
};

const capitalize = (str) => {
  let arr = str.split(' ');
  let newarr = [];
  arr.map((word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let secondpart = word.slice(1);
    newarr.push(`${firstLetter}${secondpart}`);
  });
  addCapitals.innerHTML = `Capitalized: ${newarr.join(' ')}`;
};

const lastLetter = (str) => getLastLetter.innerHTML = `Last Letter of ${str} is '${ str.slice(-1) }'`;
// const lastLetter = (str) => getLastLetter.innerHTML = `Last Letter of ${str} is '${ str.charAt(str.length - 1) }'`;

add7(5);
multiply(4, 5);
capitalize('nico rithner');
lastLetter('abcd');
