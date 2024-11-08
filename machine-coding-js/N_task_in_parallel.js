// Promise.all and Promise.allSettled aim to run Async Await in

const asyncFunction1 = async () => {
  // Perform some asynchronous operation
  return "Result 1";
};

const asyncFunction2 = async () => {
  // Perform some asynchronous operation
  return "Result 2";
};

const asyncFunction3 = async () => {
  // Perform some asynchronous operation
  return "Result 3";
};

const executeParallelFunctions = async () => {
  const results = await Promise.all([
    asyncFunction1(),
    asyncFunction2(),
    asyncFunction3(),
  ]);

  // Do something with the results
  console.log(results);
};

executeParallelFunctions();
