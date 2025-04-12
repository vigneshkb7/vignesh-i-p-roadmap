Array.prototype.myFilter = function (callback) {
  console.log(this, callback);
  const array = this;
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
};

const arr = [1, 23, 4, 5, 6];
let res = arr.myFilter((a) => a !== 1);
console.log(res);
