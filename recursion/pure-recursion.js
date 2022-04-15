 
 // i kinda cheated with the whole "index" thing. its basically iterating
 // i think this one has the best time complexity overall tho because of the lack of splice every iteration.
 // not sure if it really makes a difference though
 const getOdd = (intArr, result = [], index = 0) => {
    if (index === intArr.length) return result;
    if (intArr[index] % 2 !== 0) result.push(intArr[index]);
    index++;

    return getOdd(intArr, result, index);
}

console.log(getOdd([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]

// instructor solution
const collectAllOdds = (arr) => {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectAllOdds(arr.slice(1)));
    
    return newArr;
}

console.log(collectAllOdds([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]

// another students solution (i like the seperation of head and tail: easier to think about)
// also the spread operator does make the idea of an array filled with odd numbers easier to visualize
const collectOddValues = (arr) => {
    if (arr.length === 0) return [];

    const head = arr[0];
    const tail = arr.slice(1);

    if (head % 2 === 1) return [head, ...collectOddValues(tail)];

    return collectOddValues(tail);
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]


// my own tail recursive version. this is my favorite
// i'm not a big fan of the splice, but this is the simplest and shortest overall
const tailCollectOdds = (arr, result = []) => {
    if (arr.length === 0) return result;
    if (arr[0] % 2 === 1) result.push(arr[0]);
    return tailCollectOdds(arr.splice(1), result);
}

console.log(tailCollectOdds([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]