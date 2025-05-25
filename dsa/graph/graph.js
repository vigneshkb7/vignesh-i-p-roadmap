// 25 - May -2025
// Create a graph with nodes A, B, C, D and connect them in a square shape:
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(a, b) {
    this.adjacencyList[a].push(b);
    this.adjacencyList[b].push(a);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", this.adjacencyList[vertex].join(","));
    }
  }
  // DFS use Stack
  // Goes deep into the graph before backtracking
  // can be recursive or iterative
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("C", "D");

g.display();

// Usefule when
// Finding connected Components
// Cycle detection in graphs
// Topological sort
// Path finding
// Solving puzzle

// Web crawlers
function dfsRecursive(graph, start, visited = new Set()) {
  console.log(start);
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}

console.log("-----DFS");
dfsRecursive(g.adjacencyList, "A");

console.log("-----BFS");
// graph traversal explores graph level by level starting from a given source node
// Use Queue
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

bfs(g.adjacencyList, "A");
