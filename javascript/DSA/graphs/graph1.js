/**
 * Solving Graph Problem using Adjacency list
 */

class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        this.adjacencyList[name] = []
    }

    // undirected graph
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge() {

        this.adjacencyList[v1] = this.adjacencyList.filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList.filter(v => v !== v1);
        
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];       
    }
}