// helper funcitons

// input: int number, int digit
// output: value of the givent digit for that given number

// first inclintion is to stringify the number and then get the value at the "digit"
// index, then parse it into an integer
const _getDigit = (number, digit) => parseInt(JSON.stringify(number)[digit]);

// okay apparenty it needs to go from right to left to represent the numerical digits
const getDigit = (number, digit) => {
    const typedNumber = JSON.stringify(number)
    return parseInt(typedNumber[typedNumber.length - (digit + 1)]);
}

// here is a mathematical way to do it
const mathGetDigit = (number, digit) => {
    return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

// console.log("====")
// console.log(mathGetDigit(98, 4));

// console.log("GET DIGIT:"); // 5
// console.log(getDigit(5689, 3)); // 5
// console.log(_getDigit(5689, 3)); // 9
// console.log("=========")
// console.log(mathGetDigit(5689, 3)); // 9

////////////////////////////////////////////

// get the number of digits of a given number
const digitCount = (number) => JSON.stringify(number).length;

// mathmatical way
const _mathDigitCount = (number) => {
    let numberLength = 0;
    let numerator = Math.abs(number);
    
    for (let i = 0; i === numberLength; i++) {
        if (numerator !== 0) numberLength++;
        numerator = Math.floor(numerator / 10);
    }
    return numberLength;
}

// better mathematical way from the instructor
const mathDigitCount = (number) => number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;

// console.log("DIGIT COUNT:")
// console.log(mathDigitCount(5689)); // 4
// console.log(digitCount(5689)); // 4
// console.log("=========")
// console.log(mathDigitCount(2)); // 1
// console.log(digitCount(2)); // 1

////////////////////////////////////////////

// get the maximum number of digits that any number has
// return the number of digits of the longest number

const mostDigits = (arr) => {
    let digitCount = 0;
    
    for (num of arr) {
        const count = mathDigitCount(num);
        if (count > digitCount) digitCount = count;
    }
    
    return digitCount;
}

// console.log("MOST DIGITS:")
// console.log(mostDigits([34,456,0,5,6,3456])); // 4
// console.log(mostDigits([1,12,123,4])); // 3
// console.log(mostDigits([1,1,1,1])); // 1
// console.log("=========")

////////////////////////////////////////////

// the sorting itself, first attempt (eventually moved to the "radix.js" file and finished)
// i left this here because of te pseudo code
const sort = (arr) => {
    // create 10 "buckets"
    // let phase = mostDigits(arr)

    // determine the number of iterations "phase" (based on the number with the maximum digitCount)
    // for each element of the array starting form the end,
    // pop the element
    // get the value of the "phase-th" digit of the popped element, push it into a bucket for that value
    // continue until the original array is empty

    // for each bucket starting from the first
    // pop the last elemet of that bucket and push it back into array
    // continue until bucket is empty
    // start next phase

    const buckets = [];
    for (let i = 0; i < 10; i++) buckets.push([]);

    let phase = mostDigits(arr);
    let arrIsEmpty = false;
    let bucket = 0;

    while (phase > 0) {
        if (arr.length === 0) arrIsEmpty = true;
        if (arrIsEmpty) {
            const num = buckets[bucket].pop()
            arr.push(num);
            if (buckets[bucket].length === 0) bucket++;
            if (bucket === buckets.length) {
                arrIsEmpty = false;
                bucket = 0;
                phase--;
            }
        } else {
            const number = arr.pop();
            const digit = mathGetDigit(number, phase);
            buckets[digit].push(number);
        }
    }

    return arr;
}

// console.log(sort([1,7,3,78,34,6,98,45,2,4,7,3457,8,345,8,78,3,45]));