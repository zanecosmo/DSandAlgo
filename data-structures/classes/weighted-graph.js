class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(value) {
        if(!(value in this.adjacencyList)) this.adjacencyList[value] = [];
    };

    doesEdgeExist(vertex1, vertex2) {
        for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
            const edge = this.adjacencyList[vertex1][i];
            if (edge.value === vertex2) return i;
        }
        return null;
    }

    addEdge(vertex1, vertex2, weight) {
        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            return undefined;
        }
        
        let edgeIndex1 = this.doesEdgeExist(vertex1, vertex2);
        let edgeIndex2 = this.doesEdgeExist(vertex2, vertex1);

        if (edgeIndex1 !== null || edgeIndex2 !== null) return undefined;

        this.adjacencyList[vertex1].push({value: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({value: vertex1, weight: weight});
    }
}

module.exports = WeightedGraph;