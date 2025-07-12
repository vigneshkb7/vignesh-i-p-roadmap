function insertInterval(intervals, newInterval) {
  let result = [];
  let i = 0;

  // Add all intervals that come before the newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // Add all intervals that come after the newInterval
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// Example usage:
const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];
const result = insertInterval(intervals, newInterval);
console.log(result); // Output: [[1,5],[6,9]]
