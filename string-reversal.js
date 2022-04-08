const reverseString = (string) => {
    let newString = "";

    for (let i = string.length-1; i >= 0; i--) {
        newString += string[i];
    };

    console.log(newString)
};

const tests = [
    "FART",
    "LOSER",
    "HELLO THERE",
    "THESE AREN'T THE DROIDS YOU'RE LOOKING FOR"
]

tests.forEach(testString => reverseString(testString))