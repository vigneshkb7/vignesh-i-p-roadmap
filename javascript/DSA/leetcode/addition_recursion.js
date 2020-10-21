/**
 * Approach 1
 * @param {*} n 
 */

const sum = (n) => {
    if (n < 1) return 0;
    return n + sum(n - 1);
}

/**
 * Approach
 */

var sum1 = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));



console.log('---->', sum(10))
console.log('---->', sum1([1,2,3,6,7]))