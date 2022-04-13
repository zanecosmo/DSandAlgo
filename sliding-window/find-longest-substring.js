// input: string
// output: integer length of the longest substring of unique consecutive characters

// time: o(n)

// again running into problems at the end of the array
// terminating the loop obstructs the logic that needs to take place
// at the end of the array

// my solution
const findLongestSubstring = (str) => {
    // create a window object/freq counter
    // start two pointers, both on the left ()
    // iterate while right is less than str.length
    // check if the current right index is a letter that already exists.
    // if not:
    // save the letter as a key, and its index as a value
    // open the window to the towards the right
    // if so: 
    // if width current width > saved width: record the width of the window
    // reset window/freq counter
    // jump both pointers to the index directly ahead of the first given character
    // return saved width

    let window = {};
    let max = 0;
    let l = 0;
    let r = 0;

    while (r <= str.length) {
        const char = str[r];
        if (str[r] in window || r === str.length) {
            max = Math.max(r - l, max);
            l = window[char] + 1;
            r = window[char] + 1;
            window = {};
        } else window[char] = r++;
    }
    return max;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
console.log(findLongestSubstring("fartmuffin")); // 6
console.log(findLongestSubstring("crazyguy")); // 7
console.log(findLongestSubstring("milkyfrostshake")); // 10
console.log(findLongestSubstring("handwhistle")); // 10
console.log(findLongestSubstring("beaker")); // 4
console.log(findLongestSubstring("tablehopper")); // 8
console.log(findLongestSubstring("crud")); // 4


// intructor solution
function findLongestSubstring2(str) {
    let longest = 0; // 1 2 3 4
    let seen = {}; // b:1 e:6 a:3 k:4 r:5
    let start = 0; // 2
   
    for (let i = 0; i < str.length; i++) { // b e a k e r
      const char = str[i];
      if (seen[char]) start = Math.max(start, seen[char]);
      longest = Math.max(longest, i - start + 1);
      seen[char] = i + 1;
    }
    return longest;
}

console.log("====")
console.log(findLongestSubstring2("")); // 0
console.log(findLongestSubstring2("rithmschool")); // 7
console.log(findLongestSubstring2("thisisawesome")); // 6
console.log(findLongestSubstring2("thecatinthehat")); // 7
console.log(findLongestSubstring2("bbbbbbb")); // 1
console.log(findLongestSubstring2("longestsubstring")); // 8
console.log(findLongestSubstring2("thisishowwedoit")); // 6
console.log(findLongestSubstring2("fartmuffin")); // 6
console.log(findLongestSubstring2("crazyguy")); // 7
console.log(findLongestSubstring2("milkyfrostshake")); // 10
console.log(findLongestSubstring2("handwhistle")); // 10
console.log(findLongestSubstring2("beaker")); // 4
console.log(findLongestSubstring2("tablehopper")); // 8
console.log(findLongestSubstring2("crud")); // 4