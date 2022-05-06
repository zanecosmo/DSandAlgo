const classes = require("./classes/classes.js");

const stringData = new classes.DataGenerator();

const graph = new classes.Graph();

stringData.generateVertices(graph);
stringData.generateEdges(graph, 20)

console.log(graph.adjacencyList);

console.log(graph.BFS(stringData.stringArray[0]));
console.log(graph._BFS(stringData.stringArray[0]));
console.log(graph.__BFS(stringData.stringArray[0]));
console.log(graph.BFSRecursive(stringData.stringArray[0]));
