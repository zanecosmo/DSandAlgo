// input: int[]< (int > 0) >, argInt
// output: integer

// calculate the smallest length of a subarray, which when each of the values are added is >= argInt
// return that subarray's length

// time: O(n), space: O(1)

const test1 = ([15,1,1,1,1,1,10,10], 20) // 2  length = 8
const test2 = ([15,1,1,1,1,1,20], 20) // 1     length = 7

// attempt ---FAILED---
const minSubarrayLength = (intArr, val) => {
    let left = 0;
    let right = 0;
    length = 0;
    sum = 0;

    while (left < intArr.length) {
        const isEnd = right === intArr.length;
        if (isEnd && left < right) left++;
        
        if (!isEnd) sum += intArr[right];

        if (sum >= val) {
            const tempLength = right - left;
            if (length === 0 || tempLength < length) length = tempLength
            sum -= intArr[left];
            left++;
        }

        if (!isEnd) right++;
    };

    if (length === intArr.length - 1) return 0;
    else return length + 1;
     
    //    
    //  
    // adding the value, if it is equal or greater than argument value, store the value and
    // then we close the window from the left
    // if it is smaller, we open the window towards the right.
    // one it cnnot change size anymore, or reaches the end of the array, return stored value
};

// console.log(minSubarrayLength([15,1,1,1,1,1,10,10], 20));
// console.log(minSubarrayLength([15,1,1,1,1,1,20], 20));


// working solution
const msl = (arr, val) => {
    // if the running sum is less than the minimum value, expand window to the right
    // unless it reaches the end, then don't expand any more at all
    // else
    // if the running sum equals or exceeds the minimum value,
    // store the width of the current window (ie length of subarray), as long as it is smaller than the previous one
    // retract the window from the left
    // else return the window width plus one (for total length)

    let l = 0;
    let r = 0;
    min = Infinity;
    sum = arr[r];

    while (l < arr.length) {
        if (sum < val && r < arr.length - 1) {
            r++;
            sum += arr[r];
        } else if (sum >= val) {
            const windowWidth = r - l;
            if (windowWidth < min) min = windowWidth;
            sum -= arr[l];
            l++;
        } else break;
    }
    return min === Infinity ? 0 : min + 1;
}

console.log(msl([15,1,1,1,1,1,10,10], 20));
console.log(msl([15,1,1,1,1,1,20], 20));
console.log("===");
console.log(msl([2, 3, 1, 2, 4, 3], 7));
console.log(msl([2,1,6,5,4], 9));
console.log(msl([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log(msl([1,4,16,22,5,7,8,9,10], 39));
console.log(msl([1,4,16,22,5,7,8,9,10], 55));
console.log(msl([4,3,3,8,1,2,3], 11));
console.log(msl([1,4,16,22,5,7,8,9,10], 95));


// NOTES:
// I had the right idea, but the problem i as having was figuring out a way to terminate my loop without getting
// in the way of the alforithm

// keep in mind there is always more than one way to spin if/else statements, comparison operators, etc.
// combining if, else, comparison, can alter the flow of the code to your advantage if used properly.