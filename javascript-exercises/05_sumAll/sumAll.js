const sumAll = function (start, end) {
  if (Math.sign(start) === -1 || Math.sign(end) === -1) return 'ERROR';
  if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
  if (start < end) return addStartUp(start, end);
  if (start > end) return addStartDown(start, end);
};

const addStartUp = (start, end) => {
  let sum = start;
    let step = start + 1;
    while (step <= end) {
      sum += step;
      step++;
    }
  return sum;
};

const addStartDown = (start, end) => {
  let sum = start;
  let step = start - 1;
  while (step >= end) {
    sum += step;
    step--;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
