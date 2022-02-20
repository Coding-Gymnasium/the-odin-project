const removeFromArray = function (array, ...otherArgs) {
  let newArr = [...array];
  for (let i = 0; i < otherArgs.length; i++) {
    newArr = newArr.filter((item) => item !== otherArgs[i]);
  }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// solution 1.
// const removeFromArray = function (array, item1, item2, item3, item4) {
// return array.filter(
//   (element) =>
//     element !== item1 &&
//     element !== item2 &&
//     element !== item3 &&
//     element !== item4
// );
// };
