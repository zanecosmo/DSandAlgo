// given two strings, retrn true if the second string is an anagram of the first.

// collect all letters and frequencies in counter
// if all letters and frequencies are the same across both counters, return true

// my solution
const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let char of str1) char in freq1 ? freq1[char]++ : freq1[char] = 1;
    for (let char of str2) char in freq2 ? freq2[char]++ : freq2[char] = 1;
    for (let key in freq1) {
        if (!(key in freq2) || !(freq2[key] === freq1[key])) return false;
    };
    return true;
};

console.log(validAnagram("fart", "turf")); // false
console.log(validAnagram("cinema", "iceman")) // true
console.log(validAnagram("aaz", "zza")); // false

// cleverer solution

const validAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const lookup = {};

    for (let letter of str1) {
        letter in lookup ? lookup[letter]++ : lookup[letter] = 1;
    };

    for (let letter of str2) {
        if (!(letter in lookup) || lookup[letter] <= 0) return false;
        else lookup[letter]--;
    };

    return true;
};