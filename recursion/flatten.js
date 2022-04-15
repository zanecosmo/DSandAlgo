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

// return [flattenedHead, ...flatten(tail)]

const flatten = (arr) => {
    let head = arr[0];
    let flatHead;
    
    if (head instanceof Array) flatHead = flatten(head);
    if (arr.length === 1 && flatHead === undefined) return arr;
    if (arr.length === 1) return flatHead;

    if (flatHead !== undefined) head = flatHead[0];

    const tail = arr.splice(1);
    return [head, ...flatten(tail)];
}

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));