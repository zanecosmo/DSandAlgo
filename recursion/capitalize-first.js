// input: array of strings
// output: array of strings (with first letter of each string capitalized)

//attempt
const capitalizeFirst = (arr) => {
    const word = `${arr[0][0].toUpperCase()}${arr[0].substring(1)}`;
    if (arr.length === 1) return [word]
    return [word, ...capitalizeFirst(arr.splice(1))];
};

console.log(capitalizeFirst(["car", "taco", "banana"]));