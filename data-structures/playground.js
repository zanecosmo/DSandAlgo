const classes = require("./classes/classes.js");

const stringData = new classes.DataGenerator();

const graph = new classes.WeightedGraph();

stringData.generateVertices(graph);
stringData.generateEdges(graph);

console.log(graph.adjacencyList);

const start = stringData.stringArray[0];
const end = stringData.stringArray[stringData.stringArray.length - 1];

const result = classes.shortestPath(start, end, graph);

console.log("RESULT:", result);
