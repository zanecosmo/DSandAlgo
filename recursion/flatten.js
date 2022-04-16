// input array
// output array

// flatten (if any values are in another array within the main one, take them out
// and plae them in the outer array fdirectly) the elements in the array

// if arr[0] is undefined
// if arr.length === 1 && arr[0] !== arrayreturn arr

// if arr[0] is not array
// splice it from the array, and perform flatten on th tail
// else, perform flatten on the whole element-array without splicing



// if arr[0].length === 1 return
// if arr[0] is not an array, return arr[0]

// return [head, ...flatten(tail)]
// ================================


// splice the head
// if head is an array
// flatten the head and store it
// if head is not array AND array is only length 1 return head

// first attempt
const flatten = (arr) => {
    let head = arr[0];
    let flatHead;
    
    if (head instanceof Array) flatHead = flatten(head);

    if (arr.length === 1 && flatHead === undefined) return arr;

    if (arr.length === 1) return flatHead;

    const tail = arr.splice(1);
    
    if (flatHead !== undefined) return [...flatHead, ...flatten(tail)]

    return [head, ...flatten(tail)];
}

// second attempt (inspired by student solution)
// if arr.length === 0 return finalArray
// if head is array, flatten it
// if it is number, push it to final array
// splice, return flattened tail
const flat = (arr, finalArr = []) => {
    if (arr.length === 0) return finalArr;
    if (arr[0] instanceof Array) flat(arr[0], finalArr);
    else finalArr.push(arr[0]);
    return flat(arr.splice(1), finalArr);
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log("=====");
console.log(flat([1, 2, 3, [4, 5]]));
console.log(flat([1, [2, [3, 4], [[5]]]]));
console.log(flat([[1],[2],[3]]));
console.log(flat([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// student solution
// const flatten2 = (arr, vector = []) => {
// if (arr.length === 0) return vector;
// if (arr[0] instanceof Array) flatten2(arr[0], vector);
// else vector.push(arr[0]);

// return flatten2(arr.splice(1, arr.length), vector); // i think the arr.length was screwing up this version
// }

// console.log(flatten2([1, 2, 3, [4, 5] ]));
// console.log(flatten2([1, [2, [3, 4], [[5]]]]));
// console.log(flatten2([[1],[2],[3]]));
// console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));