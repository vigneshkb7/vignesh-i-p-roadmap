// A cycle in a graph means you can start at a node, traverse edges, and return to the
// same node without repeating any edge.

// Depending on the type of graph:

// In undirected graphs, a cycle means you come back to a node through a different path.

// In directed graphs, a cycle occurs if there's a path that forms a loop following the direction of edges.
function hasCycleUndirected(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true; // Cycle found
      }
    }

    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }

  return false;
}

// Example graph as adjacency list
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1, 3],
  3: [2],
};

console.log(hasCycleUndirected(graph)); // true

// directed

function hasCycleDirected(graph) {
  const visited = new Set();
  const recStack = new Set();

  function dfs(node) {
    visited.add(node);
    recStack.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (recStack.has(neighbor)) {
        return true; // Cycle detected
      }
    }

    recStack.delete(node);
    return false;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }

  return false;
}

// Example directed graph
const graph1 = {
  A: ["B"],
  B: ["C"],
  C: ["A"], // cycle A -> B -> C -> A
  D: ["E"],
  E: [],
};

console.log(hasCycleDirected(graph1)); // true

// | Graph Type | Technique             | Key Insight                                      |
// | ---------- | --------------------- | ------------------------------------------------ |
// | Undirected | DFS + track parent    | Cycle if visiting a visited node ≠ parent        |
// | Directed   | DFS + recursion stack | Cycle if node is visited & in current call stack |
