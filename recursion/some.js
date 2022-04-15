// input: an array, and a callback
// output: boolean

// return true if any of the elements in the array when passed to the callback return true
// return fase if none of the elements in the array return true when passed to the callback

// we go from back to front
// test the last element in the callback
// if it is true, recurse
// if it is false, we pop it and recurse
// when the array is length 0 return

const isOdd = (num) => (num % 2 === 1) ? true : false;
const startsWithA = (str) => str[0].toLowerCase() === "a" ? true : false;

const some = (arr, callback) => {
    if (arr.length === 0) return false;
    if (callback(arr[arr.length - 1])) return true;
    arr.pop();
    return some(arr, callback);
}

console.log(some([1,2,3,4], isOdd)) // true
console.log(some([2,4,6,8], isOdd)) // false
console.log(some(["bullpup", "camel", "domedry", "crapshoot"], startsWithA)) // false
console.log(some(["alamance", "impenetrable", "chair"], startsWithA)) // true
