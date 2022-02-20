const removeFromArray = function (...args) {
  const array = args[0];
  return array.filter(value => !args.includes(value));

  // --- Solugion 3
  // const array = args[0];
  // const newArray = [];
  //
  // array.forEach((item) => {
  //   if (!args.includes(item)) {
  //     newArray.push(item);
  //   }
  // });
  // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// Solution 2
// const removeFromArray = function (array, ...otherArgs) {
//   let newArr = [...array];
//   for (let i = 0; i < otherArgs.length; i++) {
//     newArr = newArr.filter((item) => item !== otherArgs[i]);
//   }
//     return newArr;
// };

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
