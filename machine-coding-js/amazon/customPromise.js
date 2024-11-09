class MyPromise {
  constructor(executor) {
    this.state = "pending"; // Can be 'pending', 'fulfilled', or 'rejected'
    this.value = undefined;
    this.reason = undefined;
    this.thenCallbacks = [];
    this.catchCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.thenCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.catchCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject); // Execute the executor function with resolve and reject
    } catch (error) {
      reject(error); // Reject if an error occurs
    }
  }

  then(onFulfilled) {
    return new MyPromise((resolve, reject) => {
      const handleFulfill = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          if (result instanceof MyPromise) {
            result.then(resolve, reject); // Chain if result is a promise
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error); // Reject if an error occurs in then callback
        }
      };

      if (this.state === "fulfilled") {
        handleFulfill(this.value);
      } else if (this.state === "pending") {
        this.thenCallbacks.push(handleFulfill);
      }
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleReject = (reason) => {
        try {
          const result = onRejected ? onRejected(reason) : reason;
          if (result instanceof MyPromise) {
            result.then(resolve, reject); // Chain if result is a promise
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error); // Reject if an error occurs in catch callback
        }
      };

      if (this.state === "rejected") {
        handleReject(this.reason);
      } else if (this.state === "pending") {
        this.catchCallbacks.push(handleReject);
      }
    });
  }

  finally(onFinally) {
    return this.then(
      (value) => MyPromise.resolve(onFinally()).then(() => value),
      (reason) =>
        MyPromise.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  }

  // Static resolve and reject methods for convenience
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise
  .then((value) => {
    console.log(value); // Output: Success!
    return "Another success!";
  })
  .then((value) => console.log(value)) // Output: Another success!
  .catch((error) => console.error(error))
  .finally(() => console.log("Completed")); // Output: Completed after success or failure
