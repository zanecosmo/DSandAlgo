// input: int[]< (int > 0) >, argInt
// output: integer

// calculate the smallest length of a subarray, which when each of the values are added is >= argInt
// return that subarray's length

// time: O(n), space: O(1)

const test1 = ([15,1,1,1,1,1,10,10], 20) // 2  length = 8
const test2 = ([15,1,1,1,1,1,20], 20) // 1     length = 7

// attempt
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

console.log(minSubarrayLength([15,1,1,1,1,1,10,10], 20));
console.log(minSubarrayLength([15,1,1,1,1,1,20], 20));