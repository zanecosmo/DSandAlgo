const getDigit = (number, digit) => {
    const stringNumber = JSON.stringify(number)
    if (digit >= stringNumber.length) return 0;
    return parseInt(stringNumber[stringNumber.length - (digit + 1)]);
}

const digitCount = (number) => JSON.stringify(number).length;

const mostDigits = (arr) => {
    let maxDigitCount = 0;
    
    for (num of arr) {
        const count = digitCount(num);
        if (count > maxDigitCount) maxDigitCount = count;
    }
    
    return maxDigitCount;
}

const sort = (arr) => {
    const buckets = Array.from({length:10}, () => []);

    let end = mostDigits(arr);
    let phase = 0;
    let bucketsFull = false;
    let bucket = 0;

    while (phase < end) {
        if (arr.length === 0) bucketsFull = true;
       
        if (bucketsFull) {
            buckets[bucket].length > 0 ? arr.push(buckets[bucket].pop()) : bucket++;
            if (bucket === buckets.length) {
                bucketsFull = false;
                bucket = 0;
                phase++;
            }
        } else {
            const number = arr.pop();
            const digit = getDigit(number, phase);
            buckets[digit].push(number);
        }
    }

    return arr;
}

// instructor solution
const _sort = (arr) => {
    let end = mostDigits(arr);
    
    for (let phase = 0; phase < end; phase++) {
        const buckets = Array.from({length:10}, () => []);
        
        for (let i = 0; i < arr.length; i++ ) {
            const number = arr[i];
            const digit = getDigit(number, phase);
            buckets[digit].push(number);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

console.log(sort([1,7,3,78,34,6,98,45,2,4,7,3457,8,345,8,78,3,45]));