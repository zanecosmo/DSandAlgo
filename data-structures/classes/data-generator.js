class dataGenerator {
    constructor() {
        this.stringArray = this.generateStringArray();
    }

    randomNumber(maxNumber = 10) {
        return Math.floor(Math.random() * (maxNumber));
    }

    makeString(length) {
        let string = "";
        const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < length; i++) {
            const randomIndex = this.randomNumber(CHARACTERS.length)
            string += CHARACTERS.charAt(randomIndex);
        }
        return string;
    }

    generateStrings(stringQuanitity) {
        const strings = [];
        for (let i = 0; i < stringQuanitity; i++) {
            const randomLength = this.randomNumber();
            if (randomLength < 1) return this.generateStrings(stringQuanitity);
            const randomString = this.makeString(randomLength);
            strings.push(randomString);
        }
        return strings;
    }

    generateStringArray (arrayLength = this.randomNumber()) {
        if (arrayLength === 0) return this.generateStringArray();
        const stringArray = this.generateStrings(arrayLength);
        return stringArray;
    }

    retrieveRandomString() {
        const index = this.randomNumber(this.stringArray.length);
        const string = this.stringArray[index];
        return string;
    }
    
    generateVertices(graph) {
        for (const string of this.stringArray) graph.addVertex(string);
    }

    generateEdges (graph, edgeQuantity = this.randomNumber()) {
        if (edgeQuantity === 0) this.generateEdges(graph);
        for (let i = 0; i < edgeQuantity; i++) {
            const string1 = this.retrieveRandomString();
            const string2 = this.retrieveRandomString();
            if (string1 !== string2) graph.addEdge(string1, string2);
        }
    }
}

module.exports = dataGenerator;