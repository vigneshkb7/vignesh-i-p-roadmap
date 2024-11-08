function autoRetryPromise(fn, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (attemptNumber) => {
      fn()
        .then(resolve) // Resolve if the promise succeeds
        .catch((error) => {
          if (attemptNumber < retries) {
            console.log(
              `Retrying... Attempt ${attemptNumber + 1} after ${delay}ms`
            );
            setTimeout(() => attempt(attemptNumber + 1), delay);
          } else {
            reject(error); // Reject if the maximum retries are reached
          }
        });
    };

    attempt(0); // Start with the first attempt
  });
}

// Usage example
const unreliableApiCall = () => {
  // Simulating a promise that has a 50% chance to fail
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success") : reject("Error");
  });
};

autoRetryPromise(unreliableApiCall, 5, 2000)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.log(`Failed after retries: ${error}`));
