const xo = input => {
  const inputData =  input.toLowerCase();
    if (inputData.indexOf('x') == -1 && inputData.indexOf('o') == -1) {
        return true;
    }

    const count = {};
    inputData.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    
    if (count['x'] && count['o'] && count['x'] === count['o']) {
        return true
    } else {
        return false;
    }

    

}


console.log('------', xo("ooxx"))
console.log('------', xo("xooxx"))
console.log('------', xo("ooxXm"))
console.log('------', xo("zpzpzpp"))
console.log('------',xo("zzoo"))