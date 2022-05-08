const PriorityQueue = require("./priority-queue");

function shortestPath(start, end, graph) {
    console.log("START: " + start);
    console.log("END: " + end);

    const distanceFromStart = {};
    const visited = {};
    const paths = {};
    const resultPath = [];
    const vertexQueue = new PriorityQueue();

    for (const vertex in graph.adjacencyList) {
        if (vertex === start) vertexQueue.enqueue(vertex, 0);
        distanceFromStart[vertex] = vertex === start ? 0 : Infinity;
        paths[vertex] = null;
    }

    while (vertexQueue.values.length > 0) {
        const vertex = vertexQueue.dequeue().value;
        
        console.log(vertex)
        if (vertex === end) {
            
            let vtx = vertex;
            
            while (true) {
                console.log("vertex", vtx)
                resultPath.push(vtx);

                if (paths[vtx] === null) {
                    const result = resultPath.reverse();
                    console.log(paths);
                    return result;
                }

                vtx = paths[vtx];
            }
        }

        graph.adjacencyList[vertex].forEach(
            edge => {
                if (edge.value in visited) return;

                const currentDistance = distanceFromStart[edge.value];
                const newDistance = edge.weight + distanceFromStart[vertex];

                if (newDistance > currentDistance) return;

                distanceFromStart[edge.value] = newDistance;

                paths[edge.value] = vertex;

                vertexQueue.enqueue(edge.value, newDistance);
            }
        )

        visited[vertex] = true;
    }
}

module.exports = shortestPath;