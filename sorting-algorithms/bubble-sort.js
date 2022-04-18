// implement a bubble sort on a shuffled arrat of integers

const numbers = [345,7,7,55,8,9,9,566,5,3,55,7,5,0];

const swap = (arr, index) => {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}

const sort = (arr) => {
    let i = 0;
    let sorter = arr.length;

    while (sorter > 0) {
        if (arr[i] > arr[i + 1]) swap(arr, i);
        i++;
        if (i === sorter) {
            sorter--;
            i = 0;
        }
    }
    return arr;
}

// if the array is partially sorted and we go through it without swapping aanything, then we know it to be sorted
// thus there is no reason to keep going
const optimizedSort = (arr) => {
    let i = 0;
    let sorter = arr.length;
    let noSwaps = false;

    while (sorter > 0) {
        noSwaps = true;

        if (arr[i] > arr[i + 1]) {
            swap(arr, i);
            noSwaps = false;
        }

        i++;

        if (i === sorter) {
            sorter--;
            i = 0;
        }

        if (noSwaps) break;
    }
    return arr;
}

console.log(sort(numbers));