/**
 *  what is dynamic programming...
 *  a method for solving a complex problem by breaking it down into a collection of simpler sub problems, solving each of those subproblems
 * just once and storing their solutions
 */

/**
 *  1. recursion
 *  2. memoization
 *  3. divide and conquer
 *  4. tabulation
 */

// recursion

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoization

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// tabulation most efficient

function fib_tab(n) {
  if (n <= 2) return 1;
  var fib = [0, 1, 1];
  for (var i = 3; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
