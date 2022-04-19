// take an array and a defalt parameter "end" which is arr.length - 1;
// choose an element to start with, lets say arr[0];
// scan the array for any elements that are less than or equal to that element
// if you find one, swap that element with the element at arr[0+1]
// if you find another, swap it with the element at arr[1+1]
// if you have reached the end of the array, swap the elment at position [n+1] with arr[0]
// end = n+1
// if fronthalf.length > 1 recurse(fronthalf, end)
// else recurse(backhalf, end)



const oddArr = [1,6,3,7,1]; // [1,1,3,7,6]
const evenArr = [6,3,73,7,9,0];

const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const sort = (arr, start = 0, end = arr.length - 1) => {
    if (end <= start) return;
    
    let pivot = start;

    for (let i = start + 1; i < end + 1; i++) {
        if (arr[i] <= arr[start]) swap(arr, i, ++pivot);
        if (i === end) swap(arr, pivot, start);
    }

    sort(arr, 0, pivot - 1);
    sort(arr, pivot + 1, end);
}

console.log(oddArr);
console.log(evenArr);

sort(oddArr);
sort(evenArr);

console.log(oddArr);
console.log(evenArr);