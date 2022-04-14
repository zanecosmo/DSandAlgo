
// O(2n) space
// try optimizing for space and time
const getOdds = (intArr) => {
    const result = [];

    (function helper(arr) {
        if (arr.length === 0) return;
        if (arr[arr.length - 1] % 2 !== 0) result.push(arr.pop());
        else arr.pop();
        helper(arr);
    })(intArr);

    const orderedResult = [];

    (function reverse(arr) {
        if (arr.length === 0) return;
        orderedResult.push(arr.pop());
        reverse(arr);
    })(result);

    return orderedResult;
};

console.log(getOdds([1,2,3,4,5,6,7,8,9])); // 1,3,5,7,9