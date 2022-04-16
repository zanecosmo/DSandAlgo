// input: object
// output: void
// assuming we are not traversing arrays (might implement this later, it would be easier with iteration)

// change all numbers that appear in the object into string versions of those numbers

// attempt
// const convertArray = (arr) => {
//     if (arr.length === 0) return;
    
//     const val = arr[arr.length - 1];
    
//     if (typeof val === "number") arr[0] = arr[0].toString();
    
//     if (Object.prototype.toString.call(val === "[object Object]")) {
//         stringifyNumbers(val);
//     };
    
//     convertArray(arr.splice(1));
// };

const stringifyNumbers = (obj) => {
    for (key in obj) {

        const val = obj[key];
        
        if (Object.prototype.toString.call(val === "[object Object]")) {
            stringifyNumbers(val);
        };

        if (typeof val === "number") obj[key] = obj[key].toString();

        // if (Array.isArray(val)) convertArray(val);
    };
};

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);
console.log(obj);