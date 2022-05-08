const WeightedGraph = require("./weighted-graph.js");

class dataGenerator {
    constructor() {
        this.stringArray = this.generateStringArray();
        this.maxEdges = this.determineMaxEdges(this.stringArray.length);
        // console.log(this.stringArray.length);
        // console.log(this.maxEdges)
    }

    determineMaxEdges(vertexQuantity) {
        return (vertexQuantity * (vertexQuantity - 1)) / 2;
    }

    randomNumber(maxNumber = 10) {
        return Math.floor(Math.random() * (maxNumber + 1));
    }

    makeString() {
        const randomLength = this.randomNumber();
        if (randomLength < 1) return this.makeString();

        const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        const characters = [];
        for (let i = 0; i < randomLength; i++) {
            const randomIndex = this.randomNumber(ALPHABET.length - 1);
            characters.push(ALPHABET.charAt(randomIndex));
        }
        return characters.join("");
    }

    generateStringArray (arrayLength = this.randomNumber()) {
        if (arrayLength === 0) return this.generateStringArray();
        const stringArray = [];
        for (let i = 0; i < arrayLength; i++) {
            const randomString = this.makeString();
            stringArray.push(randomString);
        }
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

    generateEdges (graph, edgeQuantity = this.randomNumber(this.maxEdges)) {
        if (this.maxEdges !== 0 && edgeQuantity === 0) this.generateEdges(graph);
        for (let i = 0; i < edgeQuantity; i++) {
            const string1 = this.retrieveRandomString();
            const string2 = this.retrieveRandomString();
            if (string1 === string2) continue;

            if (graph instanceof WeightedGraph) graph.addEdge(string1, string2, this.randomNumber(100));
            else graph.addEdge(string1, string2);
        }
    }
}

module.exports = dataGenerator;