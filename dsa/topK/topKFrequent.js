// [1,1,1,2,3,2] ,top 2

//most frequent occuring number in the list

// o/ p should be [1,2]

function topKFrequent(array, limit) {
  const freq = {};

  array.forEach((a) => {
    freq[a] = freq[a] ? freq[a] + 1 : 1;
  });

  const res = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const result = res.map((a) => a[0]).slice(0, limit);
  console.log(result);
}

topKFrequent([1, 1, 1, 3, 2, 2], 2);

//result should be [1,2]
