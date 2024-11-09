function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // Append a callback function that resolves or rejects the Promise
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const fs = require("fs");

// Original async function with callback
function readFileCallback(path, encoding, callback) {
  fs.readFile(path, encoding, callback);
}

// Convert to promise-based function using promisify
const readFilePromise = promisify(readFileCallback);

// Use the promisified function
readFilePromise("./example.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
