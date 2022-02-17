const repeatString = function (string, num) {
  let concatString = '';
  if (Math.sign(num) === -1) concatString = 'ERROR';
  for (let i = 0; i < num; i++) {
    concatString += string;
  }
  return concatString;
};

// Do not edit below this line
module.exports = repeatString;
