const sortBinary = (b1, b2) => {
    const result = [...b1.filter(_b1=>_b1!==null), ...b2.filter(_b2=>_b2!==null)];
    return result.sort();
}


console.log('--->sort1', sortBinary([2, 1, 4], [1, 0, 3]))

console.log('--->sort1', sortBinary([0, -10, 10], [5, 1, 7, 0, 2]))
console.log('--->sort1', sortBinary([], [5,1,7,0,2]))
console.log('--->sort1', sortBinary([0,-10,10], []))
console.log('--->sort1', sortBinary([1,null,8], [8,1]))
