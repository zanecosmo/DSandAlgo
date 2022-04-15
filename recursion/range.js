// return the integer sum of all integer numbers below a given number down to 0

const range = (num) => num === 1 ? num : num + range(--num);
const tailRange = (num, sum = 0) => num === 0 ? sum : range(num--, sum + num);

console.log(range(5)); // 15
console.log(range(4)); // 10
console.log(range(17)); // 153

console.log(tailRange(5)); // 15
console.log(tailRange(4)); // 10
console.log(tailRange(17)); // 153