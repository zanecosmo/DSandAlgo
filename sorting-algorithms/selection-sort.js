// selection sort

// my first attempt switches on every comparison, but it still sorts properly
const numbers = [345,7,7,55,8,9,9,566,5,3,55,7,5,0];

const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const sort = (arr) => {
    let sorter = 0;
    let i = 0;

    while (sorter < arr.length) {
        if (arr[i] < arr[sorter]) swap(arr, sorter, i);
        if (i === arr.length - 1) {
            i = sorter;
            sorter++;
        }
        i++;
    }

    return arr;
}

console.log(sort(numbers));

// second attempt
const sort2 = (arr) => {
    let sorter = 0;
    let i = 0;
    let minIndex = 0;
    let noChange = true;

    while (sorter < arr.length) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
            noChange = false;
        }

        if (i === arr.length - 1) {
            if (!noChange) swap(arr, sorter, minIndex);
            i = sorter;
            sorter++;
        }

        i++;
    }

    return arr;
}

console.log(sort2(numbers));