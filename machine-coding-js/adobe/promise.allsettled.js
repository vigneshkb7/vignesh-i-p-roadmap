function allSettled(promises) {
  return new Promise((resolve) => {
    let settledCount = 0;
    const results = new Array(promises.length);

    promises.forEach((promise, index) => {
      // Ensure each item is a promise by wrapping it in Promise.resolve
      Promise.resolve(promise)
        .then(
          (value) => {
            results[index] = { status: "fulfilled", value };
          },
          (reason) => {
            results[index] = { status: "rejected", reason };
          }
        )
        .finally(() => {
          settledCount += 1;
          // When all promises have settled, resolve the main promise
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.reject("Failed");
const promise3 = Promise.resolve("Success");

allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // Output:
  // [
  //   { status: 'fulfilled', value: 10 },
  //   { status: 'rejected', reason: 'Failed' },
  //   { status: 'fulfilled', value: 'Success' }
  // ]
});
