const sumAll = function (first, last) {
  let count = 0;
  const isInteger = !Number.isInteger(first) || !Number.isInteger(last)
const isNumber = typeof first !== 'number'  || typeof last !== 'number'
const isLessThanZero =  first < 0  || last < 0
  if (isLessThanZero || isNumber || isInteger ) {
    return "ERROR";
  } else if (first < last) {
    for (let i = first; i <= last; i++) {
      count += i;
    }
  } else if (first > last) {
    for (let i = first; i >= last; i--) {
      count += i;
    }
  }
  return count;
};

const first = 1
const last = 0

 
// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(-1, 1));
console.log(sumAll(1, -1));
console.log(sumAll(2, 5));
console.log(sumAll(5, 2));
console.log(sumAll(2.5, 2));
console.log(sumAll("hey", 2));
// console.log(isInteger, isNumber, isLessThanZero);