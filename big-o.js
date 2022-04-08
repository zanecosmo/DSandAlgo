// calculate the sum of all numbers from 1 up to and including some number (n)

// my solution
const freeformSum = (n) => {
    let sum = 0;
    for (let i = n; i > 0; i--) sum += i;
    return sum
};

// altternative solution
const altSum = (n) => n * (n + 1) / 2;

tests = [1, 12, 36, 73];

tests.forEach(testN => console.log(freeformSum(testN)));
tests.forEach(testN => console.log(altSum(testN)));

//timing each function experimentally
const start1 = Date.now();
freeformSum(10000000000); // forloop
const end1 = Date.now();
const length1 = end1-start1;
console.log(length1);

const start2 = Date.now();
altSum(10000000000); // calculation
const end2 = Date.now();
const length2 = end2-start2;
console.log(length2);

