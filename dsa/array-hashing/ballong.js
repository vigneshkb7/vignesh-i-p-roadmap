// You have balloons arranged in a line, each with a number written on it.
// When you shoot a balloon, your score is calculated as (shooting_order × balloon_value).
// For example, if you shoot a balloon with value 5 as your 3rd shot, you get 3 × 5 = 15 points.
// Given an array of balloon values, find the maximum possible total score you can achieve by shooting all balloons.

function MaxScore(arr) {
  const ballons = arr.sort();
  let max = 0;
  for (let i = 0; i < ballons.length; i++) {
    max += arr[i] * (i + 1);
  }

  return max;
}

let ip = [1, 2, 3, 4, 5];
MaxScore(ip);

console.log(MaxScore(ip));

// TS

// function MaxScore(arr: number[]): number {
//   const balloons = [...arr].sort((a, b) => a - b); // Numeric sort
//   let max = 0;
//   for (let i = 0; i < balloons.length; i++) {
//     max += balloons[i] * (i + 1);
//   }
//   return max;
// }
