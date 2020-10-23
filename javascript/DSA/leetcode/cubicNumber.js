


const cubicNumber = (num) => {
    if (num == 0 && num < 0) return false;
    const cubenumbers = String(num).split('');
    let count = 0;
    cubenumbers.forEach(c => count += Math.pow(parseInt(c), 3));
    if(count == num) return true;
    return false;
}



console.log('---cube number---->',cubicNumber(153))