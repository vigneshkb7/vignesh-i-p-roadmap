// problem is to determine if a person could attend all meetings, meaning there are no overlapping meetings.

// Input: [[1, 3], [4, 6], [5, 7]]
// Output: false (because the second and third meetings overlap)

// point 1 : In this implementation, we sort the intervals based on their start times and then iterate through the
// sorted intervals.

// point 2: If at any point we find that the start time of a meeting is less than the end time of the previous
// meeting, it means there is an overlap, and we return false.Otherwise, we return true.

function canAttendMeetings(intervals) {
  if (intervals.length <= 1) {
    return true; // No overlapping meetings with one or zero meetings
  }

  // Sort intervals based on start times
  intervals.sort((a, b) => a[0] - b[0]);

  // Check for overlapping meetings
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false; // Overlapping meetings found
    }
  }

  return true; // No overlapping meetings
}

// Example usage:
const meetings1 = [
  [1, 3],
  [4, 6],
  [5, 7],
];
console.log(canAttendMeetings(meetings1)); // Output: false

const meetings2 = [
  [1, 3],
  [4, 6],
  [7, 9],
];
console.log(canAttendMeetings(meetings2)); // Output: true
