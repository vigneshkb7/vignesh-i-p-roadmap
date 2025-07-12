//find the minimum number of conference rooms required for a list of meeting intervals.
// steps
// Extract the start and end times from the intervals.
// Sort the startTimes and endTimes arrays in ascending order.

function minMeetingRooms(intervals) {
  if (intervals.length === 0) {
    return 0; // No meetings, no rooms needed
  }

  // Separate start times and end times into separate arrays
  const startTimes = intervals.map((interval) => interval[0]);
  const endTimes = intervals.map((interval) => interval[1]);

  // Sort start times and end times separately
  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);
  let rooms = 0; // Number of conference rooms needed
  let endPointer = 0; // Pointer to track the end times

  // Iterate through start times
  for (let i = 0; i < startTimes.length; i++) {
    // If the current meeting starts after the earliest ending meeting, a room can be reused
    if (startTimes[i] >= endTimes[endPointer]) {
      endPointer++;
    } else {
      // Otherwise, a new room is needed
      rooms++;
    }
  }
  return rooms;
}

// Example usage:
const meetings1 = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minMeetingRooms(meetings1)); // Output: 2
const meetings2 = [
  [7, 10],
  [2, 4],
];
console.log(minMeetingRooms(meetings2)); // Output: 1
