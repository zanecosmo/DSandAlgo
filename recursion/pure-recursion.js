const getOdd = (intArr, result = [], index = 0) => {
    if (index === intArr.length) return result;
    if (intArr[index] % 2 !== 0) {
        result.push(intArr[index]);
        index++
    } else index++;

    return getOdd(intArr, result, index);
}

console.log(getOdd([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]