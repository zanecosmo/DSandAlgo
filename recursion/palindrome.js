// ipnut: string
// output: boolean

// determine if string s palendrome

// if string length === 1 or 0, return true
// if first and last are equal:
// create substring and recurse with it
// else return false

const isPalindrome = (str) => {
    if (str.length === 1 || str.length === 0) return true;
    if (str[0] === str[str.length - 1]) {
        const innerString = str.substring(1, str.length - 1);
        return isPalindrome(innerString);
    };
    return false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));

