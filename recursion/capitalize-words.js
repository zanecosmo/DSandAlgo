// input: array of words
// output: array of words (which is identical to the input except that all the letters of each word are capitalized)

// did not realize toUpperCase can convert and entire string, so I made an additional recursive function that would do it
const capitalizeChars = (string) => {
    if (string.length === 1) return string.toUpperCase();
    const word = `${string[0].toUpperCase()}${capitalizeChars(string.substring(1))}`;
    return word;
}

// I use the helper function here
const capitalizeWords = (arr) => {
    const word = capitalizeChars(arr[0]);
    if (arr.length === 1) return [word]
    return [word, ...capitalizeWords(arr.splice(1))]
}

// one-liner:
const capitalize = (arr) => arr.length > 0 ? [arr[0].toUpperCase(), ...capitalize(arr.splice(1))] : [];

const words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(JSON.parse(JSON.stringify(words)))); // ["I", "AM", "LEARNING", "RECURSION"]
console.log(capitalize(JSON.parse(JSON.stringify(words)))); // ["I", "AM", "LEARNING", "RECURSION"]