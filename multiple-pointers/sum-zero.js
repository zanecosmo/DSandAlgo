// given an array of sorted integers (smallest to largest), find the first pair of integers within the array which when added, return a sum of 0
// return a int[]? with length of 2

// loop over array and store each value in frequency counter
    // make another loop which loops over freqCounter and checks to see if val(-1) exists as a key in the counter
    // if it does, return loop2 iterator and val(-1)


// my solution: O(Nish)
const sumZero = (sortedInts) => {
    let collection = {};

    for (let number of sortedInts) collection[number] = true;

    for (let number of sortedInts) {
        const inverse = parseInt(number) * -1;
        if (inverse in collection) return [inverse, number];
    };

    return null;
};

const test1 = [-5, -3, 0, 3, 6]; // [-3, 3]
const test2 = [-3, 1, 4, 12]; // null/undefined
const test3 = [4, 12, 0, -6, -4, -12] // [4,-4]

console.log(sumZero(test1));
console.log(sumZero(test2));
console.log(sumZero(test3));

// multiple pointers solution
const sumZero2 = (sortedInts) => {
    let left = 0;
    let right = sortedInts.length -1;

    while (left < right) {
        let sum = sortedInts[left] + sortedInts[right];
        if (sum === 0) return [sortedInts[left], sortedInts[right]];
        else if (sum > 0) right--;
        else left++;
    };

    return null;
};

console.log(sumZero2(test1));
console.log(sumZero2(test2));
console.log(sumZero2(test3));