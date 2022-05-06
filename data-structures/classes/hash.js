function hash(keyString, arrayLength) {
    let total = 0;
    let weirdPrime = 31;

    for (let i = 0; i < Math.min(keyString.length, 100); i++) {
        let char = keyString[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + weirdPrime + value) % arrayLength;
    }

    return total;
}

module.exports = hash;