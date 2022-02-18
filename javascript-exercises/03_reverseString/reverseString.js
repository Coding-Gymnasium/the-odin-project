const reverseString = (string) => {
  const arr = string.split(' ');
  const arrReversed = [];
  arr.forEach((str) => {
    arrReversed.push(str.split('').reverse().join(''));
  });
  return arrReversed.reverse().join(' ');
};

// Do not edit below this line
module.exports = reverseString;
