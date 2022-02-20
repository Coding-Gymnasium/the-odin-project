const leapYears = function (year) {
  // condition 1: leapYears are divisible by four.
  // century years (divisible by 100) are not leapYears
  // century year divisible by 400 are leapYears
  if (year % 400 === 0) {
    return true;
  } else {
    return year % 100 != 0 && year % 4 === 0;
  }
};

// Do not edit below this line
module.exports = leapYears;
