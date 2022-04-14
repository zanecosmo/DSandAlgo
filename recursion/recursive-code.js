const recurse = arg => arg < 10 ? recurse(++arg) : arg;
// console.log(recurse(0));

const anyOdd = (arr) => {
    if (arr.length === 0) return "there are no odd numbers!";
    if (!(arr[arr.length - 1] % 2 === 0)) return "there is an odd number!";
    arr.pop();
    return anyOdd(arr);
};

// console.log(anyOdd([2, 4, 7, 6]));
// console.log(anyOdd([2, 4, 6, 8]));

// factorial:   5 * 4 * 3 * 2 * 1

// one liner factorial recursive
const factorial = num => num > 1 ? num * factorial(--num) : num;

// one liner (although maybe it shouldn't be) tail-recursive factorial
// apparently chrome and firefox don't currently optimize for tail recursion, but safari does
const tailFactorial = (num, product = 1) => num > 1 ? tailFactorial( --num, (num + 1) * product ) : product;

// console.log(factorial(4)); // 24
console.log(tailFactorial(4)); // 24
// console.log(fac(4)); // 24