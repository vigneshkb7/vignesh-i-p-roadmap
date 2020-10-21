

/**
 * 
 * @param {*} num 6798
 * @returns largest possible number from the given
 */

const largestNumber = (num) => {

    return Number(String(num).split('').sort().reverse().join(''))
}


console.log('--------',largestNumber(789))