const reverseString = (string) => {
    let newString = "";

    for (let i = string.length-1; i >= 0; i--) {
        newString += string[i];
    };

    console.log(newString)
};

reverseString("FART");