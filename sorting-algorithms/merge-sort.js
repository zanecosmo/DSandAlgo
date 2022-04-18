// breaking the array into halves
const _sort = (arr) => {
    // split array into two smaller arrays
    // if both of them are length 1, merge them and return the sorted array
    // otherwise, merge(half(arr1), half(arr2))

    let half1 = arr.splice(0, Math.ceil(arr.length / 2));
    let half2 = arr.length > 0 ? arr : [];

    if (half1.length <= 1 && arr.length <= 1) return merge(half1, half2);
    else return merge(sort(half1), sort(half2));
}

const sort = (arr) => {
    let half = arr.splice(0, Math.ceil(arr.length / 2));
    return (half.length <= 1 && arr.length <= 1) ? merge(half, arr) : merge(sort(half), sort(arr));
}

// merging two sorted arrays
const merge = (arr1, arr2) => {
    let i = 0, j = 0;
    let sortedArr = [];
    
    while (sortedArr.length < arr1.length + arr2.length) {
        if (i === arr1.length) sortedArr.push(arr2[j++]);
        else if (j === arr2.length) sortedArr.push(arr1[i++]);
        else arr1[i] < arr2[j] ? sortedArr.push(arr1[i++]) : sortedArr.push(arr2[j++])
    }
    return sortedArr;
}

// console.log(merge([1,3,5,7,9], [2,4,6,8,10]));
// console.log(merge([1,3,3,5,7,8,8,9], [2,4,6,8]));

console.log(sort([2,65,8,3,8,0,0,3,4,6,345,86,9,345,6,3,3,67,79,56,34,9,2,4,5,7,8]));