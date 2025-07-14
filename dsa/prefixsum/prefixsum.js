// approach
// each element at index i contains the sum of elements from start of the array till i
// step 1 : prefixSum[0] = arr[0];
// step 2: iterate throught the array
// step 3:  prefixSum[i] = prefixSum[i - 1] + arr[i];

// to calculate subarray sum calculation

// sum[i,j] = prefixSum[j]- prefixSum[i-1];

function prefixSum(arr) {
  let prefixSum = [];
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

let ps = prefixSum([3, 5, 2, 7, 1]);

console.log(ps);

//sum(i,i) = prefixsum[j]- prefixsum(i-1)
console.log(ps[3] - ps[1 - 1]);
