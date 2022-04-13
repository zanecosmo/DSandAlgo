const recurse = arg => arg < 10 ? recurse(++arg) : arg;
console.log(recurse(0));

const anyOdd = (arr) => {
    if (arr.length === 0) return "there are no odd numbers!";
    if (!(arr[arr.length - 1] % 2 === 0)) return "there is an odd number!";
    arr.pop();
    return anyOdd(arr);
};

console.log(anyOdd([2, 4, 7, 6]));
console.log(anyOdd([2, 4, 6, 8]));

// factorial:   5 * 4 * 3 * 2 * 1

const factorial = num => num > 1 ? num * factorial(--num) : num;
console.log(factorial(4)); // 24