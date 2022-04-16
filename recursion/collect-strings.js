// input: object
// output: array of strings (which are all the strings that exist in the object)

// attempt
const collectStrings = (obj) => {
    let strArr = [];

    for (key in obj) {
        const val = obj[key];
        
        if (Object.prototype.toString.call(val) === "[object Object]") {
            strArr = [...strArr, ...collectStrings(val)];
        };

        if (typeof val === "string") strArr.push(val);
    };

    return strArr;
};

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])