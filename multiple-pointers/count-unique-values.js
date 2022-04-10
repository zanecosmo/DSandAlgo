// given a sorted array, count the number of unique values in the array. there can be negative numbers.
// return an integer that represents the number of unique values

// [-2, -2, -1, 0, 0, 0, 1, 1, 1, 3, 3, 7]  output: 6
// [1,2,3,4,5]  output: 5
// [-12, -8, -8, -5, -4, -3, 2, 12, 24, 24, 24, 56, 58, 90]  output: 11

// i'd make a freq counter for this one
const countUniqueValues = (sortedInts) => {
    const count = {};
    for (let int of sortedInts) int in count ? count[int]++ : count[int] = 1;
    return Object.keys(count).length;
};

let test1 = [-2, -2, -1, 0, 0, 0, 1, 1, 1, 3, 3, 7];
let test2 = [1, 2, 3, 4, 5];
let test3 = [-12, -8, -8, -5, -4, -3, 2, 12, 24, 24, 24, 56, 58, 90];

console.log(countUniqueValues(test1));
console.log(countUniqueValues(test2));
console.log(countUniqueValues(test3));

// lets try a multiple pointers version
// this ended up not being a multiple pointers version, but i'm having a difficult time seeing how to use
// multiple pointers here
const countUniqueValues2 = (sortedInts) => {
    // loop through each int
    // if i !== array.length ---> come bck to this
    // increment a counter
    // see if given int is equal to the int that comes after
    // if yes, continue
    // if no, push counter to an array, and reset counter to 0
    // retrun counterArray.length
    const length = sortedInts.length;
    if (length === 0 || length === 1) return length;

    const uniqueValues = [];
    let counter = 0;
    for (let i = 0; i < length; i++) {
        counter++;
        if (i === length - 1 || !(sortedInts[i] === sortedInts[i+1])) {
            uniqueValues.push(counter);
            counter = 0;
        };
    };
    return uniqueValues.length;
};

console.log(countUniqueValues2(test1));
console.log(countUniqueValues2(test2));
console.log(countUniqueValues2(test3));

// actual multiple-pointers solution
const countUniqueValues3 = (sortedInts) => {
    // if the length is 0 or 1, handle first
    // declare two pointers
    // loop over the array
    // increment scout
    // see if the two pointers match in value
    // if yes, increment scout
    // if no, increment current and set equal to scout

    const length = sortedInts.length;
    if (length === 0 || length === 1) return length;

    let current = 0
    let scout = 0;

    while (scout !== sortedInts.length - 1) {
        scout++
        if (sortedInts[current] !== sortedInts[scout]) {
            current++;
            sortedInts[current] = sortedInts[scout];
        };
    };
    return current + 1;
};

console.log(countUniqueValues3(test1));
console.log(countUniqueValues3(test2));
console.log(countUniqueValues3(test3));

test1 = [-2, -2, -1, 0, 0, 0, 1, 1, 1, 3, 3, 7];
test2 = [1, 2, 3, 4, 5];
test3 = [-12, -8, -8, -5, -4, -3, 2, 12, 24, 24, 24, 56, 58, 90];


// proposed multiple pointers solution
const countUniqueValues4 = (sortedInts) => {
    if (sortedInts.length === 0) return 0;
    let i = 0;
    for (let j = 0; j < sortedInts.length; j++) {
        if (sortedInts[i] !== sortedInts[j]) {
            i++;
            sortedInts[i] = sortedInts[j];
        };
    };
    return i + 1;
};

console.log(countUniqueValues4(test1));
console.log(countUniqueValues4(test2));
console.log(countUniqueValues4(test3));