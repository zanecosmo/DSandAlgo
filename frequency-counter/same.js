// write a function called same, which takes two arrays, and checks to see if all the values of one array happen to be squares of all the values in the other.
// the order of the values does not matter, but the frequency of values should match, and the values themselves must be there.
// function should return a boolean value

// [1,2,3] [4,1,9]  TRUE
// [1,2,3] [4,4,1]  FALSE
// [1,2,3] [1,9]  FALSE

// its alway arr1 that is the standard

// my solution: O(N^2)
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    let checks = 0;

    for (let i = 0; i < arr1.length; i++) {
        const val1= arr1[i];
        if (val1 === null || typeof val1 !== "number") return false;

        innerLoop:
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === val1**2) {
                arr2[j] = null;
                checks++;
                break innerLoop;
            };
        };
    };

    if (checks === arr1.length) return true;
    else return false;
};

console.log(same([1,2,3], [1,4,9])); // true
console.log(same([1,2,3], [1,9,4])); // true
console.log(same([1,2,2], [4,4,1])); // true
console.log(same([1,2,3], [1,4,4])); // false
console.log(same([1,2,3], [1,4])); // false

// frequency counter solution: O(N)
const FQsame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    const freqCount1 = {};
    const freqCount2 = {};

    for (let val of arr1) val in freqCount1 ? freqCount1[val]++ : freqCount1[val] = 1;
    for (let val of arr2) val in freqCount2 ? freqCount2[val]++ : freqCount2[val] = 1;

    for (let key in freqCount1) {
        if(!(key ** 2 in freqCount2)) return false;
        if(freqCount2[key ** 2] !== freqCount1[key]) return false;
    };

    return true;
};

console.log(FQsame([1,2,3], [1,4,9]));
console.log(FQsame([1,2,3], [1,9,4]));
console.log(FQsame([1,2,2], [4,4,1]));
console.log(FQsame([1,2,3], [1,4,4]));
console.log(FQsame([1,2,3], [1,4]));