// input: string
// output: string

// reverse the string

const reverse = (str) => {
    const length = str.length;
    const last = length - 1;

    if (length === 1 || length === 0) return str;

    const innerString = str.substring(1, last);
    
    return str[last] + reverse(innerString) + str[0];
}

// switch the first and last chars of the string
// move in and do the same thing
// repeat until you get to the middle.
// if the string is even, switch the last two and return
// if the string is odd, leave the last one, and return

console.log(reverse("FARTMUFFIN")); 
console.log(reverse("breakfast"));
console.log(reverse("daeh diputs"));
console.log(reverse("123456789")); 