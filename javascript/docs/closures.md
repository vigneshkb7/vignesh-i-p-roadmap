#Implement once(fn) function

`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}`

1. Fixing closure looping problem

for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 100);
}
// Logs: 3 3 3

for (var i = 0; i < 3; i++) {
((j) => setTimeout(() => console.log(j), 100))(i);
}
