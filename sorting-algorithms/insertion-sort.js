// insertion sort

const numbers = [345,7,7,55,8,9,9,566,5,3,55,7,5,0];

const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// let the first element be sorted
// let pointer = 1;
// let i = 1;

// while pointer  < arr.length
// compare the i value to the i - 1 value
// if smaller, swap it with the first and i--
// else pointer++
const sort = (arr) => {
    let pointer = 1;
    let i = 1;
    
    while (pointer < arr.length) {
        if (i > 0 && arr[i] < arr[i - 1]) {
            swap(arr, i, i - 1);
            i--;
        } else {
            pointer++;
            i = pointer;
        }
    }
    return arr;
}

console.log(sort(numbers));
console.log(sort(numbers));