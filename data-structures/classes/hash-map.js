class HashMap {
    constructor(size = 53) {
        this.keyMap = new Array(size);
        // for (let i = 0; i < size; i++) this.keyMap[i] = [];
    }

    hash(keyString) {
        let total = 0;
        let weirdPrime = 31;
    
        for (let i = 0; i < Math.min(keyString.length, 100); i++) {
            let char = keyString[i];
            let value = char.charCodeAt(0) - 96;
            total = (total + weirdPrime + value) % this.keyMap.length;
        }
    
        return total;
    }

    set(key, value) {
        let index = this.hash(key);
        if (this.keyMap[index] === undefined) this.keyMap[index] = [];
        else for(const pair of this.keyMap[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                break;
            }
        }
        this.keyMap[index].push([key, value]);
    };
        // hash the key
        // store key value pair
        // put an empty array into the index, and push the key-value array into that array

    get(key) {
        // hash key
        // retreives array of key-values
        // iterates over them until it finds the key we're looking for
        // if the key isn't there, return undefined

        const keyArray = this.keyMap[this.hash(key)];
        if (keyArray === undefined) return undefined;
        if (keyArray.length === 1) return keyArray[0][1];
        for (pair of keyArray) if (pair[0] === key) return pair[1];
    }

    keys() {
        const keyArray = [];

        for (const array of this.keyMap) {
            if (array === undefined) continue;
            if (array.length === 1) keyArray.push(array[0][1]);
            else for (pair of array) keyArray.push(pair[1]);
        }

        return keyArray;
    }

    values() {
        const valueArray = [];

        for (const array of this.keyMap) {
            if (array === undefined) continue;
            if (array.length === 1) valueArray.push(array[0][0]);
            else for (pair of array) valueArray.push(pair[0]);
        }

        return valueArray;
    }
}

module.exports = HashMap;