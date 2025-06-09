// | Graph Type                | Algorithm        | Notes                             |
// | ------------------------- | ---------------- | --------------------------------- |
// | Unweighted                | **BFS**          | Fastest for equal-cost edges      |
// | Weighted (non-negative)   | **Dijkstra**     | Very common, handles weights well |
// | Weighted (with negatives) | **Bellman-Ford** | Handles negative weights, slower  |
const PriorityQueue = require("priorityqueuejs");

function dijkstra(graph, start) {
  const distances = {};
  const prev = {};
  const pq = new PriorityQueue((a, b) => b[1] - a[1]); // Min heap

  for (let node in graph) {
    distances[node] = Infinity;
    prev[node] = null;
  }

  distances[start] = 0;
  pq.enq([start, 0]);

  while (!pq.isEmpty()) {
    const [current, dist] = pq.deq();

    for (let neighbor in graph[current]) {
      let newDist = dist + graph[current][neighbor];

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        prev[neighbor] = current;
        pq.enq([neighbor, newDist]);
      }
    }
  }

  return { distances, prev };
}

// Example Weighted Graph
const graph = {
  A: { B: 1, C: 4 },
  B: { C: 2, D: 5 },
  C: { D: 1 },
  D: {},
};

const result = dijkstra(graph, "A");
console.log(result.distances); // { A: 0, B: 1, C: 3, D: 4 }
