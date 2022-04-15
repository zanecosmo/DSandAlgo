// input integer: given number in the fibonacci sequence
// output integer that number in the fibnacci sequence

// --num
// step one can be done last by adding one to the return
// get step one out of num

// worked backwards form an iterative solution to achieve ths first successful solution
const fib = (num, fibPair = [1,1]) => {
    if (num === 2) return fibPair[1];
    const nextFib = fibPair[0] + fibPair[1];
    const nextFibPair = [fibPair[1], nextFib];
    return fib(--num, nextFibPair);
}

// trying to keep state in the previous function call closure, but ---FAILURE---
const fib2 = (num, fibPair = [1,1]) => {
    if (num === 2) return fibPair[1];
    const nextFib = fibPair[0] + fibPair[1];
    // const nextFibPair = [fibPair[1], nextFib];
    return fibPair[0] + fib2(--num);
}

// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

console.log(fib2(4)); // 3
console.log(fib2(10)); // 55
console.log(fib2(28)); // 317811
console.log(fib2(35)); // 9227465

// trying to find a mathematical pattern but ---FAILURE---
// 4 1  -3
// 3 1  -2
// 2 2  +0
// 1 3  +2

// 10 1   -9
// 9  1   -8
// 8  2   -6
// 7  3   -4
// 6  5   -1
// 5  8   +3
// 4  13  +9
// 3  21  +18
// 2  34  +31
// 1  55  +54

// student solution
// this is insane i have no idea how this works
// multilevel recursiveness good god
const fib3 = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);
