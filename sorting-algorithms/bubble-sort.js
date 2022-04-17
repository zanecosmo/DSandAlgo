// implement a bubble sort on a shuffled arrat of integers

const numbers = [345,7,7,55,8,9,9,566,5,3,55,7,5,0];

const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const sort = (arr) => {
    let i = 0;
    let sorter = arr.length;

    while (sorter > 0) {
        if (arr[i] > arr[i+1]) swap(arr, i, i+1);
        i++;
        if (i === sorter) {
            sorter--;
            i = 0;
        }
    }
    return arr;
}

console.log(sort(numbers));