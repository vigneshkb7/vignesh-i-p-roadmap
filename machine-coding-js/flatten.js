const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//------ recursion ----------//
const arrrecur = [1, [2, 3, [4, 5]]];

const flatten = (input) => {
  let result = [];

  if (!Array.isArray(input)) {
    return input;
  }

  for (let data of input) {
    result = result.concat(flatten(data));
  }

  return result;
};

//----- reduce ------//
function flatten(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
}

const arrreduce = [1, [2, 3, [4, 5]]];

const flattened = flatten(arr2);

console.log(flattened);
