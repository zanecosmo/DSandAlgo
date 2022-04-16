// input: object (of variable complexity, could be nested objects within)
// output: integer (sum of all even number occurences within the object)

// int runningSum
// iterate over object
// if (Object.prototype.toString.call(obj[key]) === "[object Object]") runningSum += recruse(obj[key])
// if (obj[key].typeof("number") && obj[key] % 2 === 0) runningSum+= obj[key];

// return runningSum

const nestedEvenSum = (obj) => {
    let runningSum = 0;

    for (key in obj) {

        const val = obj[key];
        
        if (Object.prototype.toString.call(val) === "[object Object]") {
            runningSum += nestedEvenSum(val);
        };

        if (typeof(val) === "number" && val % 2 === 0) runningSum+= val;
    }

    return runningSum
};

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  
const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

const obj3 = {
    a: 4,
    b: {
        c: {
            d: 4,
            e: 5,
            f: "fart",
            g: {
                string: "null",
                number: 2
            }
        },
        h: {
            i: "i",
            j: 6,
            k: 22,
            l: 21
        }
    },
    m: {
        n: 0,
        o: "fart again"
    },
    p: 19,
    q: 2
}
  
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.log(nestedEvenSum(obj3)); // 40