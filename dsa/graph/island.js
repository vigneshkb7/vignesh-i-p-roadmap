// Loop through each cell in the grid.

// When you find a '1', increment the island count.

// Start a DFS from that cell and mark all connected land as visited by changing '1' to '0'.

// Continue until the entire grid is processed.

function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (i, j) => {
    // Base conditions: bounds or water
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === "0") return;

    // Mark the current cell as visited
    grid[i][j] = "0";

    // Explore all 4 directions
    dfs(i + 1, j); // down
    dfs(i - 1, j); // up
    dfs(i, j + 1); // right
    dfs(i, j - 1); // left
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
}
