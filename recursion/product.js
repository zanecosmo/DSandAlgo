// return the product of all elements in an integer array

const prod = arr => arr.length === 1 ? arr[0] : arr[0] * prod(arr.splice(1));
const tailProd = (arr, prod = 1) => arr.length === 0 ? prod : tailProd(arr.splice(1), arr[0] * prod);
const tailProd2 = (arr, prod = 1) => {
    if (arr.length === 0 && prod !== 1) return prod;
    else if (arr.length === 0) return 0;
    return tailProd(arr.splice(1), arr[0] * prod);
}

console.log(prod([1,2,3,4,5])); // 120
console.log(tailProd2([])); // 120
console.log(tailProd2([1,2,3,4,5])); // 120
console.log(tailProd([1,2,3,4,5])); // 120