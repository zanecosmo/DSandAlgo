const Queue = require("./queue.js");

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(value) {
        if(!(value in this.adjacencyList)) this.adjacencyList[value] = [];
    };
    
    doesEdgeExist(vertex1, vertex2) {
        for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
            const edge = this.adjacencyList[vertex1][i];
            if (edge === vertex2) return i;
        }
        return null;
    }

    addEdge(vertex1, vertex2) {
        // if v1 does not exist or if v2 does not exist, return undefined;

        // list[v1].push(v2);
        // list[v2].push(v1)

        // if the connection already exists we should return or handle it somehow

        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            return undefined;
        }
        
        let edgeIndex1 = this.doesEdgeExist(vertex1, vertex2);
        let edgeIndex2 = this.doesEdgeExist(vertex2, vertex1);

        if (edgeIndex1 !== null || edgeIndex2 !== null) return undefined;

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // could use filter method
    removeEdge(vertex1, vertex2) {
        // if one of the vertices doesn't exist return undefined
        // if either one of the vertices doesn't have a connection to the other, return undefined
        // splice the given vertex from the the array, for both arrays
        // --> or better yet use a doubly linked list to remove to remove the node and not have to use O(n) splice

        if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
            return undefined;
        }

        let edgeIndex1 = this.doesEdgeExist(vertex1, vertex2);
        let edgeIndex2 = this.doesEdgeExist(vertex2, vertex1);
        
        if (edgeIndex1 === null || edgeIndex2 === null) return undefined;

        this.adjacencyList[vertex1].splice(edgeIndex1, 1);
        this.adjacencyList[vertex2].splice(edgeIndex2, 1);        
    }

    removeVertex(vertex) {
        // function hsould loop as long as tere are any oter vertecies in the adjacency list for that vertex
        // for each value in list[vertex]
        //   remove edge(value, vertex)
        // delete list[vertex]

        if (!(vertex in this.adjacencyList)) return undefined;

        while (this.adjacencyList[vertex].length > 0) {
            this.removeEdge(this.adjacencyList[vertex][0], vertex);
        }

        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex, visited = {}, vertices = []) {
        // vertex, freq counter, list of visited vertices
        // if vertex has no edges, available edges, return vertexArray
        // go to vertex
        // add vertex to fq with a true value
        // find child node
    
        if (!(vertex in this.adjacencyList)) return undefined;

        visited[vertex] = true;
        vertices.push(vertex);

        for (const edge of this.adjacencyList[vertex]) {
            if (!(edge in visited)) this.DFSRecursive(edge, visited, vertices);
        }

        return vertices;
    }

    // accidentally wrote this
    __DFSRecursive(vertex, visited = {}, vertices = [vertex]) {
        visited[vertex] = true;

        this.adjacencyList[vertex].forEach(vtx => {
                if (!(vtx in visited)) {
                    vertices.push(vtx);
                    return this.BFSRecursive(vtx, visited, vertices)
                }
            }
        );
        return vertices;
    }

    DFSHelper(vertex, visited, vertices) {
        visited[vertex] = true;
        vertices.push(vertex);

        for (const edge of this.adjacencyList[vertex]) {
            if (!(edge in visited)) this.DFSHelper(edge, visited, vertices);
        }
    }

    // instructor version
    _DFSRecursive(vertex) {
        // vertex, freq counter, list of visited vertices
        // if vertex has no edges, available edges, return vertexArray
        // go to vertex
        // add vertex to fq with a true value
        // find child node

        if (!(vertex in this.adjacencyList)) return undefined;
        
        const visited = {};
        const vertices = [];

        this.DFSHelper(vertex, visited, vertices);

        return vertices;
    }

    DFSIterative(startVertex) {
        if (!(startVertex in this.adjacencyList)) return undefined;

        const visited = {};
        const vertices = [];

        let vertex = startVertex;
        let index = 0;
        let pointer = 0;

        while(pointer >= 0) {

            if (!(vertex in visited)) { // put vertex into visited list
                visited[vertex] = true;
                console.log(vertices)
                vertices.push(vertex);
                pointer = vertices.length - 1;
            }
            
            const vertexList = this.adjacencyList[vertex]

            if (index >= vertexList.length) { // switch vertex to previous vertex
                index = 0;
                vertex = vertices[--pointer];
            }
            
            else if (!(vertexList[index] in visited)) { // go to next vertex
                vertex = vertexList[index];
                index = 0;
            }
            
            else ++index; // try out next vertex
        }
        
        return vertices;
    }

    // with stack
    _DFSIterative(start) {
        if (!(startVertex in this.adjacencyList)) return undefined;

        const visited = {};
        const stackTracker = [start];
        const result = [];

        while (stackTracker.length > 0) {
            
            const vertex = stackTracker.pop();
            
            if (!(vertex in visited)) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(vtx => stackTracker.push(vtx));
            }
        }

        return result;
    }

    BFS(startVertex) {
        if (!(startVertex in this.adjacencyList)) return undefined;

        const visited = {};
        visited[startVertex] = true;
        const vertices = [startVertex];

        for (let i = 0; i < vertices.length; i++) {
            this.adjacencyList[vertices[i]].forEach(vtx => {
                if (vtx in visited) return;
                visited[vtx] = true;
                vertices.push(vtx);
            });
        }

        return vertices;
    }

    _BFS(startVertex) {
        if (!(startVertex in this.adjacencyList)) return undefined;
        
        const tracker = new Queue();
        tracker.enqueue(startVertex);
        
        const visited = {};
        const vertices = [];

        while (tracker.length > 0) {
            const vertex = tracker.dequeue();

            if (!(vertex in visited)) {
                visited[vertex] = true;
                vertices.push(vertex);
            }

            this.adjacencyList[vertex].forEach(vtx => {
                !(vtx in visited) && tracker.enqueue(vtx);
            });
        }

        return vertices;
    }

    __BFS(startVertex) {
        if (!(startVertex in this.adjacencyList)) return undefined;

        const tracker = new Queue();
        tracker.enqueue(startVertex);
        
        const visited = {};
        visited[startVertex] = true;
        
        const vertices = [];

        while (tracker.length > 0) {
            const vertex = tracker.dequeue();                
            vertices.push(vertex);

            this.adjacencyList[vertex].forEach(vtx => {
                if (vtx in visited) return;
                visited[vtx] = true;
                tracker.enqueue(vtx);
            });
        }

        return vertices;
    }

    BFSRecursive(vertex, visited = {}, vertices = [], tracker = new Queue()) {

        if (vertex === undefined) return vertices;

        vertices.push(vertex);
        visited[vertex] = true;
        
        this.adjacencyList[vertex].forEach(vtx => {
            if (!(vtx in visited)) {
                visited[vtx] = true;
                tracker.enqueue(vtx);
            }
        });

        return this.BFSRecursive(tracker.dequeue(), visited, vertices, tracker)
    }
}

module.exports = Graph;