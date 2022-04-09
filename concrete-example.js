// write a function that takes in a string and returns counts of each character in the string

// count = how many times a character appears in the string

// return = object which has keys of the letters, and alues of the counts

// count upper case and lower case as the same, only use alphanumeric symbols, no spaces, periods, etc.

const returnCount = (string) => {
    const countObject = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();
        const code = char.charCodeAt(0);

        if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) continue;
        if (countObject.hasOwnProperty(char)) countObject[char]++;
        else countObject[char] = 1;
    };
    return countObject;
};

console.log(returnCount("Hello, my name is Buddy."));

const returnCount2 = (string) => {
    const obj = {};
    for (let character of string) {
        const char = character.toLowerCase();
        const code = char.charCodeAt(0);

        if ((code > 47 && code < 58) || (code > 96 && code < 123)) obj[char] = ++obj[char] || 1;
    };
    return obj;
};

console.log(returnCount2("Hello, my name is Buddy."));