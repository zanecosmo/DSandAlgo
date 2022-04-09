// write a function which takes two numbers and returns their sums

// 1. restate the problem in your own words:
// : i'm writing a function that adds two numbers (passed as args) together

// 2. what are the ipnuts to the problem?
// : two integers (addends)

// :: what are the constraints of the numerical types we are passing?
// are there only two inputs? what if there are more or if one is left out? how big can the numbers be? negaties? decimals?

// 3. what ar the outputs from the solution?
// : one integer (sum)

// 4. can the outputs be determined from the inputs? aka-- do i have enough info? is the problem possible?
// : yes. two numbers can be added togeter to produce one sum.

// : what if only one addend is entered? there actually isn't enough info.

// 5. how should i label the important pieces of data that are part of the problem?
// probably as what they are: addendX, addendY, sum

const add = (x, y) => x + y;

const addFleshedOut = (x, y) => {
    
    if (x === null || y == null) {
        console.log("need two numbers");
        return;
    }
    
    if (typeof x !== "number" || typeof y !== "number" ) {
        console.log("must be numbers");
        return;
    };

    return x + y;
};

console.log(addFleshedOut(12, 2));
console.log(addFleshedOut(2));
console.log(addFleshedOut("butt", 2));
console.log(addFleshedOut(12, 2.2));