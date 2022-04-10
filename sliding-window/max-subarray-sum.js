// write a function which takes an array of integers (doesn't have to be sorted), and a single integer value of "n"
// the function should return the sum of a series of "n" consecutive numbers in the array which add up to the highest value.

// [1,2,5,2,8,1,5], 2    10
// [1,2,5,2,8,1,5], 4    17
// [4,2,1,6], 1          6
// [], 4                 null

// my first attempt: O(N^2)
const maxSubarraySum = (intArr, num) => {
    
    // var largestSum
    // iteratate over the array until i < arr.ength - n
    // svar sum
    // iterate again, j === i, until j === n
    // add j, j+1, j+2, j+3
    // if sum > largestSum, largestSum === sum
    // return largestSum

    if (num > intArr.length) return null;

    let largestSum = 0;

    for (let i = 0; i <= intArr.length - num; i++) {
        let sum = 0;
        let window = 0;
        while (window < num) {
            sum += intArr[i+window];
            window++;
        };
        if (sum > largestSum) largestSum = sum;
    };

    return largestSum;
};


    
const test1 = [1,2,5,2,8,1,5];
const test2 = [1,2,5,2,8,1,5];
const test3 = [4,2,1,6];
const test4 = [];

console.log(maxSubarraySum(test1, 2));
console.log(maxSubarraySum(test1, 4));
console.log(maxSubarraySum(test3, 1));
console.log(maxSubarraySum(test4, 4));

// sliding window approach
// subtract from the beginning, add to the end
const maxSubarraySum2 = (intArr, num) => {
    // console.log(intArr);

    let largestSum = 0;
    let sum = 0;

    if (num > intArr.length) return null;

    for (let i = 0; i < num; i++) largestSum += intArr[i];
    
    sum = largestSum;
    
    for (let i = num; i < intArr.length; i++) {
        console.log(sum);

        sum = sum - intArr[i-num] + intArr[i];
        largestSum = Math.max(largestSum, sum);
        // console.log(largestSum);
    };

    return largestSum;
};

console.log("=====");
console.log(maxSubarraySum2(test1, 2));
console.log("=====");
console.log(maxSubarraySum2(test1, 4));
console.log("=====");
console.log(maxSubarraySum2(test3, 1));
console.log("=====");
console.log(maxSubarraySum2(test4, 4));